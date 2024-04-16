import { useEffect, useState } from 'react'
import Leaderboard from './CluePopups/Leaderboard'
import '../styles/popup.css'

export default function EndPage() {
  const [leaderboard, setLeaderboard] = useState(false)
  const [block, setBlock] = useState(false)

  useEffect(() => {
    document.body.style.backgroundImage = "url('/end-page/end-page.png')"
  })

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  function handleOpenLeaderboard() {
    setLeaderboard(true)
    setBlock(true)
  }

  return (
    <>
      <div>
        <img
          src="/end-page/game-cleared.png"
          alt="game cleared text"
          style={{
            height: '150px',
            position: 'absolute',
            left: '370px',
            top: '350px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '550px',
            top: '600px',
            display: 'flex',
          }}
        >
          <img
            src="/end-page/lucas-face.png"
            alt="lucas' face"
            style={{
              height: '170px',
            }}
          />
          <div
            style={{
              // left: '450px',
              // top: '650px',
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '70px',
            }}
          >
            <h1
              style={{
                marginBlockStart: '0px',
                marginBlockEnd: '0px',
                marginTop: '10px',
              }}
            >
              Your score is below
            </h1>
            <p style={{ marginBlockStart: '0px', marginBlockEnd: '0px' }}>
              2 minutes and 27 seconds
            </p>
          </div>
        </div>
        {leaderboard && (
          <div className="popup-overlay">
            <div className="clockface-popup popup">
              <Leaderboard
                setLeaderboard={setLeaderboard}
                setBlock={setBlock}
              />
            </div>
          </div>
        )}
        {!block && (
          <>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
            <img
              src="/end-page/leaderboard-moon.png"
              alt="button to leaderboard"
              className="leaderboard-popup"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                height: '340px',
                width: '340px',
                filter: isHovered
                  ? 'drop-shadow(1px 1px 10px white) drop-shadow(-2px -2px 10px white) drop-shadow(2px -2px 10px white) drop-shadow(-2px 2px 10px white)'
                  : 'none',
                position: 'absolute',
                right: '82px',
                top: '65px',
              }}
              onClick={handleOpenLeaderboard}
            />
          </>
        )}
      </div>
    </>
  )
}
