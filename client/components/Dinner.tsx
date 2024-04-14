import { useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'
import Matching from './GamePopups/Matching'
import MatchingExample from './GamePopups/MatchingExample'
import Clock from './GamePopups/Clock'
import CombinationLock from './GamePopups/CombinationLock'
import '../styles/popup.css'

export default function Dinner() {
  const [jigsaw, setJigsaw] = useState(false)
  const [matching, setMatching] = useState(false)
  const [matchingWin, setMatchingWin] = useState(false)
  const [matchingE, setMatchingE] = useState(false)
  const [clock, setClock] = useState(false)
  const [lockNum, setLockNum] = useState(false)

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

      {lockNum && (
        <div className="popup-overlay">
          <div className="game-popup">
            <CombinationLock setLockNum={setLockNum} />
          </div>
        </div>
      )}
      <button onClick={() => setLockNum(true)}>Combination Lock</button>

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
            <MatchingExample setMatching={setMatchingE} />
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
