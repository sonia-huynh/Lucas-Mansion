/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from 'react'
import pathing from '../data/Maze.json'
import { useNavigate } from 'react-router-dom'
import '../styles/maze.css'

import steps from '/audio/steps.mp3'

export default function Maze() {
  const [position, setPosition] = useState(0)
  //audio
  const [volume, setVolume] = useState(100)
  const [sound, setSound] = useState('')

  const random = ['running-soundscape', 'running-in-the-woods']

  function getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const following = setInterval(() => {
    const i = getRandomNumber(0, 1)
    setSound(random[i])
  }, 30000)

  const navigate = useNavigate()
  useEffect(() => {
    document.body.style.backgroundImage = `url('/maze/routes/${pathing[position].image}.png')`
    if (position === 100) {
      setVolume(0)
      navigate(`../end-page`)
    }
  }, [position])

  const step = new Audio(steps)

  if (pathing) {
    return (
      <>
        <audio
          id="ambience"
          src={'/audio/night-ambience.mp3'}
          autoPlay={true}
          // eslint-disable-next-line react/no-unknown-property
          volume={volume}
          loop={true}
        />
        <audio
          id="singing"
          src={'/audio/maze-sing.mp3'}
          autoPlay={true}
          // eslint-disable-next-line react/no-unknown-property
          volume={volume}
          loop={true}
        />
        <audio
          id="singing"
          src={`/audio/${sound}.mp3`}
          autoPlay={true}
          // eslint-disable-next-line react/no-unknown-property
          volume={volume}
          loop={true}
        />
        {pathing[position].left && (
          <button
            className="left direction"
            onClick={() => {
              step.play(), setPosition(pathing[position].left as number)
            }}
          >
            <img src="/maze/directions/left.png" alt="left" />
          </button>
        )}
        {pathing[position].forward && (
          <button
            className="forward direction"
            onClick={() => {
              step.play(), setPosition(pathing[position].forward as number)
            }}
          >
            <img src="/maze/directions/forward.png" alt="forward" />
          </button>
        )}
        {pathing[position].right && (
          <button
            className="right direction"
            onClick={() => {
              step.play(), setPosition(pathing[position].right as number)
            }}
          >
            <img src="/maze/directions/right.png" alt="right" />
          </button>
        )}
        {pathing[position].back ? (
          <button
            className="back direction"
            onClick={() => {
              step.play(), setPosition(pathing[position].back as number)
            }}
          >
            <img src="/maze/directions/back.png" alt="back" />
          </button>
        ) : (
          pathing[position].back === 0 && (
            <button
              className="back direction"
              onClick={() => {
                step.play(), setPosition(pathing[position].back as number)
              }}
            >
              <img src="/maze/directions/back.png" alt="back" />
            </button>
          )
        )}
      </>
    )
  }
}
