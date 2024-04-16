/* eslint-disable jsx-a11y/media-has-caption */
import '../../styles/popup.css'
import '../../styles/clock.css'
import { useEffect, useState } from 'react'

interface Props {
  setClockFace: React.Dispatch<React.SetStateAction<boolean>>
  clockFace: boolean
}

export default function ClockFace({ setClockFace, clockFace }: Props) {
  const [clockAudio, setClockAudio] = useState(0)

  useEffect(() => {
    clockFace ? setClockAudio(100) : setClockAudio(0)
  }, [clockFace])

  return (
    <>
      <audio
        id="clockFace"
        src={'/audio/clock.mp3'}
        autoPlay={true}
        loop={true}
        // eslint-disable-next-line react/no-unknown-property
        volume={clockAudio}
      />
      <img
        className="clockimg"
        src="/clock-face.png"
        alt="inside clock has a lantern and a piece of a puzzle"
      />
      <button
        className="close"
        onClick={() => {
          setClockFace(false)
        }}
      >
        x
      </button>
    </>
  )
}
