import { useState } from 'react'
import '../../styles/clock.css'

interface Props {
  setClock: React.Dispatch<React.SetStateAction<boolean>>
  win: boolean
  setFoundPapers: React.Dispatch<React.SetStateAction<boolean[]>>
  foundPapers: boolean[]
}

export default function Clock({
  setClock,
  win,
  setFoundPapers,
  foundPapers,
}: Props) {
  function collect() {
    const newArr = [...foundPapers]
    newArr[2] = true
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
      {win ? (
        foundPapers[2] === false ? (
          <>
            <img
              className="clockimg"
              src="/clock-inside-closeup.png"
              alt="inside clock has a lantern and a piece of a puzzle"
            />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
            <img
              src="/collect-items.png"
              alt="button to collect items"
              onClick={collect}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                height: '70px',
                position: 'absolute',
                bottom: '60px',
                left: '207px',
                filter: isHovered
                  ? 'drop-shadow(1px 1px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px 2px 0 white)'
                  : 'none',
              }}
            />
          </>
        ) : (
          <img
            className="clockimg"
            src="/clock-inside-empty.png"
            alt="inside of clock is empty"
          />
        )
      ) : (
        <img
          className="clockimg"
          src="/clock-inside-locked.png"
          alt="clock is locked with items inside"
        />
      )}

      <button className="close" onClick={() => setClock(false)}>
        x
      </button>
    </>
  )
}
