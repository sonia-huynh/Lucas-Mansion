/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from 'react'
import '../styles/foyer.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export default function Foyer() {
  const navigate = useNavigate()
  //audio
  const [volume, setVolume] = useState(100)

  useEffect(() => {
    document.body.style.backgroundImage = "url('/foyer-images/foyer.png')"
  })

  return (
    <>
      <div className="foyerdoordiv">
        <audio
          id="dinnerAudio"
          src={'/audio/foyer.mp3'}
          autoPlay={true}
          // eslint-disable-next-line react/no-unknown-property
          volume={volume}
          currentTime={10}
        />
        <button
          className="foyerdoor"
          onClick={() => {
            setVolume(0)
            navigate(`../maze`)
          }}
        >
          <img
            className="foyerdoor"
            src="/foyer-images/foyer-door.png"
            alt="foyer door"
          />
        </button>
      </div>
    </>
  )
}
