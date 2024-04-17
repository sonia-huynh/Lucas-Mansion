/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from 'react'
import '../styles/foyer.css'
import '../styles/dinner.css'
import { useNavigate } from 'react-router-dom'

//audio
import door from '/audio/foyerDoor.mp3'

export default function Foyer() {
  const navigate = useNavigate()

  //audio
  const [volume, setVolume] = useState(100)

  const [display, setDisplay] = useState(true)
  const [key, setKey] = useState(false)

  function handleClick() {
    setDisplay(false)
    setKey(true)
  }

  useEffect(() => {
    document.body.style.backgroundImage = "url('/foyer-images/foyer.png')"
  })

  const foyerSound = new Audio(door)

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
        {key && (
          <button
            className="foyerdoor"
            onClick={() => {
              foyerSound.play()
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
        )}
        <button className="clue cave">
          <img
            src="/foyer-images/cave.png"
            alt="frame of a dining room"
            className="caveimg"
          />
        </button>
        <button
          className="clue keyFrame"
          onClick={handleClick}
          style={!display ? { display: 'none' } : {}}
        >
          <img
            src="/foyer-images/keypic.png"
            alt="frame with key"
            className="keyFrame"
          />
        </button>
        <button className="clue minnie">
          <img
            src="/foyer-images/lucasMinnie.png"
            alt="frame of a lucas and minnie"
            className="minnie"
          />
        </button>
        <button className="clue piano">
          <img
            src="/foyer-images/piano.png"
            alt="grand piano"
            className="piano"
          />
        </button>
        <button className="clue pianoChair">
          <img
            src="/foyer-images/pianoChair.png"
            alt="piano stool"
            className="pianoChair"
          />
        </button>
      </div>
    </>
  )
}
