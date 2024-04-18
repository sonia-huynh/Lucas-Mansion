import { useState } from 'react'
import '../../styles/popup.css'

//audio:
import paper from '/audio/paper.mp3'
const paperSound = new Audio(paper)

interface Props {
  setGnome: React.Dispatch<React.SetStateAction<boolean>>
  foundPapers: boolean[]
  setFoundPapers: React.Dispatch<React.SetStateAction<boolean[]>>
}

export default function Gnome({
  setGnome,
  foundPapers,
  setFoundPapers,
}: Props) {
  function handleClick() {
    const newArr = [...foundPapers]
    newArr[0] = true
    setFoundPapers(newArr)
  }

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <>
      <h1>Gnome</h1>
      <p>{`The gnome's two hands make him look in a daze because below its two feet appears to be a piece of a maze...`}</p>
      {foundPapers[0] === false && (
        <>
          <img
            src="/puzzle-images/exit.png"
            alt="a puzzle pice"
            style={{ height: '130px', marginBottom: '15px' }}
          />
          <br />

          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <img
            onClick={() => {
              paperSound.play(), handleClick()
            }}
            style={{
              height: '30px',
              filter: isHovered
                ? 'drop-shadow(1px 1px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px 2px 0 white)'
                : 'none',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/collect.png"
            alt="collect button"
          />
        </>
      )}

      <button
        className="close"
        onClick={() => {
          setGnome(false)
        }}
      >
        x
      </button>
    </>
  )
}
