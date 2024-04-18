/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from 'react'
import '../styles/foyer.css'
import '../styles/dinner.css'
import { useNavigate } from 'react-router-dom'

//audio
import door from '/audio/foyerDoor.mp3'

interface Interaction {
  text: string
  width: number
  height: number
}

export default function Foyer() {
  const navigate = useNavigate()

  //audio
  const [volume, setVolume] = useState(100)

  const [display, setDisplay] = useState(true)
  const [key, setKey] = useState(false)
  const [interaction, setInteraction] = useState(false)
  const [clue, setClue] = useState({ text: '', width: 0, height: 0 })

  function handleClick() {
    setDisplay(false)
    setKey(true)
    interact({ text: 'Key Aquired!', width: 615, height: 224 })
  }

  useEffect(() => {
    document.body.style.backgroundImage = "url('/foyer-images/foyer.png')"
  })

  function interact(data: Interaction) {
    setInteraction(true)
    setClue(data)
    setTimeout(() => setInteraction(false), 2000)
  }

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
        {key ? (
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
        ) : (
          <button
            className="foyerdoor"
            onClick={() =>
              interact({
                text: "It's locked!",
                width: 311,
                height: 405,
              })
            }
          >
            <img
              className="foyerdoor"
              src="/foyer-images/foyer-door.png"
              alt="foyer door"
            />
          </button>
        )}
        <button
          className="clue cave"
          onClick={() =>
            interact({
              text: 'Looks like a cave or something',
              width: 959,
              height: 53,
            })
          }
        >
          <img
            src="/foyer-images/cave.png"
            alt="frame of a dining room"
            className="caveimg"
          />
        </button>
        <button
          className="clue keyFrame"
          onClick={() =>
            key
              ? interact({
                  text: 'Just a blank frame',
                  width: 575,
                  height: 224,
                })
              : handleClick()
          }
        >
          {display ? (
            <img
              src="/foyer-images/keypic.png"
              alt="frame with key"
              className="keyFrame"
            />
          ) : (
            <img
              src="/foyer-images/keypicblank.png"
              alt="frame without key"
              className="keyFrame"
            />
          )}
        </button>
        <button
          className="clue minnie"
          onClick={() =>
            interact({ text: 'A cute couple', width: 430, height: 318 })
          }
        >
          <img
            src="/foyer-images/lucasMinnie.png"
            alt="frame of a lucas and minnie"
            className="minnie"
          />
        </button>
        <button
          className="clue piano"
          onClick={() =>
            interact({
              text: 'Seems to be playing by itself',
              width: 1315,
              height: 409,
            })
          }
        >
          <img
            src="/foyer-images/piano.png"
            alt="grand piano"
            className="piano"
          />
        </button>
        <button
          className="clue pianoChair"
          onClick={() =>
            interact({
              text: 'Nothing of interest here',
              width: 1098,
              height: 839,
            })
          }
        >
          <img
            src="/foyer-images/pianoChair.png"
            alt="piano stool"
            className="pianoChair"
          />
        </button>
        {interaction && (
          // {true && (
          <p
            style={{
              position: 'absolute',
              left: `${clue.width}px`,
              top: `${clue.height}px`,
            }}
          >
            {clue.text}
          </p>
        )}
      </div>
    </>
  )
}
