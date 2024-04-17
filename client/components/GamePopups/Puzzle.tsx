import { useState } from 'react'

//audio:
import paper from '/audio/paper.mp3'

export default function Puzzle() {
  const [side, setSide] = useState('front')
  const [isHovered, setIsHovered] = useState(false)
  const paperSound = new Audio(paper)

  function handleSeeBack() {
    paperSound.play(), setSide('back')
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div style={{ margin: '115px' }}>
      {side === 'front' ? (
        <>
          <img
            src="/puzzle-images/full_map.png"
            alt="maze-map"
            style={{ height: '500px' }}
          />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
          <img
            onClick={handleSeeBack}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/puzzle-images/flip-over.png"
            alt="flip-over-button"
            style={{
              height: '100px',
              filter: isHovered
                ? 'drop-shadow(2px 2px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px 2px 0 white)'
                : // 'drop-shadow(8px 8px 5px white)'
                  'none',
            }}
          />
        </>
      ) : (
        <>
          <img
            src="/puzzle-images/back-map.png"
            alt="maze-map"
            style={{ height: '500px' }}
          />
        </>
      )}
    </div>
  )
}
