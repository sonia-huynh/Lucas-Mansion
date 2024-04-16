import { useEffect, useState } from 'react'
import Leaderboard from './CluePopups/Leaderboard'
import '../styles/popup.css'

export default function EndPage() {
  const [leaderboard, setLeaderboard] = useState(false)

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
        <img
          src="/end-page/lucas-face.png"
          alt="lucas' face"
          style={{
            height: '150px',
            position: 'absolute',
            left: '850px',
            top: '550px',
          }}
        />
        {leaderboard && (
          <div className="popup-overlay">
            <div className="clockface-popup popup">
              <Leaderboard setLeaderboard={setLeaderboard} />
            </div>
          </div>
        )}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        <img
          src="/end-page/leaderboard-moon.png"
          alt="button to leaderboard"
          className="leaderboard-popup"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            height: '250px',
            width: '250px',
            filter: isHovered
              ? 'drop-shadow(1px 1px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px 2px 0 white)'
              : 'none',
            position: 'absolute',
            left: '800px',
            top: '50px',
          }}
          onClick={() => setLeaderboard(true)}
        />
      </div>
    </>
  )
}
