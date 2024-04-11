import { useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'
import CombinationLock from './GamePopups/CombinationLock'
import Matching from './GamePopups/Matching'
import MatchingExample from './GamePopups/MatchingExample'
import Clock from './GamePopups/Clock'
import '../styles/popup.css'

export default function Dinner() {
  const [jigsaw, setJigsaw] = useState(false)
  const [lock, setLock] = useState(false)
  const [matching, setMatching] = useState(false)
  const [matchingWin, setMatchingWin] = useState(false)
  const [matchingE, setMatchingE] = useState(false)
  const [clock, setClock] = useState(false)

  return (
    <>
      <h1>Dinner</h1>
      {jigsaw && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Jigsaw setJigsaw={setJigsaw} />
          </div>
        </div>
      )}
      <button onClick={() => setJigsaw(true)}>JIGSAW</button>

      {lock && (
        <div className="popup-overlay">
          <div className="game-popup">
            <CombinationLock setLock={setLock} />
          </div>
        </div>
      )}
      <button onClick={() => setLock(true)}>Combination Lock</button>

      {matching && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Matching
              setMatching={setMatching}
              win={matchingWin}
              setWin={setMatchingWin}
            />
          </div>
        </div>
      )}
      <button onClick={() => setMatching(true)}>match-up GAME</button>

      {matchingE && (
        <div className="popup-overlay">
          <div className="game-popup">
            <MatchingExample setMatchingE={setMatchingE} />
          </div>
        </div>
      )}
      <button onClick={() => setMatchingE(true)}>match-up Example</button>

      {clock && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Clock setClock={setClock} />
          </div>
        </div>
      )}
      <button onClick={() => setClock(true)}>Clock Inside</button>
    </>
  )
}
