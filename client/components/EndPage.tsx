import { useEffect, useState } from 'react'
import Leaderboard from './CluePopups/Leaderboard'
import '../styles/popup.css'
import '../styles/leaderboard.css'
import { useLeaderboardMutation } from '../hooks/useLeaderboard'
interface Props {
  timer: number
}

export default function EndPage({ timer }: Props) {
  const [leaderboard, setLeaderboard] = useState(false)
  const [block, setBlock] = useState(false)
  const [score, setScore] = useState({ name: '', time: '' })
  const [submition, setSubmition] = useState(false)
  const mutation = useLeaderboardMutation()

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    mutation.mutate(score)
    setScore({ name: '', time: '' })
    setSubmition(true)
  }

  return (
    <>
      <div>
        <img
          src="/end-page/game-cleared.png"
          alt="game cleared text"
          className="background-img"
        />
        <div className="message">
          <img
            src="/end-page/lucas-face.png"
            alt="lucas' face"
            style={{
              height: '170px',
            }}
          />
          <div className="your-score">
            <h1 id="score-title">Your score:</h1>
            <p
              style={{
                marginBlockStart: '0px',
                marginBlockEnd: '0px',
                filter:
                  'drop-shadow(1px 1px 0px wheat) drop-shadow(-1px -1px 0px wheat) drop-shadow(1px -1px 0px wheat) drop-shadow(-1px 1px 0px wheat)',
              }}
            >
              {`${Math.floor(timer / 60)} minutes and ${timer % 60} seconds.`}
            </p>

            {!submition && (
              <>
                <p
                  style={{
                    filter:
                      'drop-shadow(1px 1px 0px wheat) drop-shadow(-1px -1px 0px wheat) drop-shadow(1px -1px 0px wheat) drop-shadow(-1px 1px 0px wheat)',
                  }}
                >
                  Add your score to the leaderboard.
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    required
                    onChange={(e) =>
                      setScore({
                        name: e.target.value.toUpperCase(),
                        time: String(timer),
                      })
                    }
                    type="text"
                    name="name"
                    id="name"
                    value={score.name}
                    placeholder="Your name"
                  />
                  <button type="submit" className="submit-name">
                    submit
                  </button>
                </form>
              </>
            )}
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
              className="leaderboard-popup moon-button"
              onClick={handleOpenLeaderboard}
            />
          </>
        )}
      </div>
    </>
  )
}
