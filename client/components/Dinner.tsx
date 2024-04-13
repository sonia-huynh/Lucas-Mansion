import { useEffect, useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'
import Matching from './GamePopups/Matching'
import MatchingExample from './GamePopups/MatchingExample'
import Clock from './GamePopups/Clock'
import '../styles/popup.css'
import CombinationLock from './GamePopups/CombinationLock'
import '../styles/main.css'
// import '../../public/dinner-images/lucas-image.png'

export default function Dinner() {
  const [jigsaw, setJigsaw] = useState(false)
  const [matching, setMatching] = useState(false)
  const [matchingWin, setMatchingWin] = useState(false)
  const [matchingE, setMatchingE] = useState(false)
  const [clock, setClock] = useState(false)
  const [lockNum, setLockNum] = useState(false)
  const [block, setBlock] = useState(true)

  useEffect(() => {
    if (!jigsaw && !matchingE && !matching && !clock && !lockNum) {
      setBlock (false)
    } else {
      setBlock(true)
    }
    console.log(block, matching)
  }, [jigsaw, matching, matchingE, clock, lockNum, block])

  return (
    <>
      {jigsaw && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Jigsaw setJigsaw={setJigsaw} />
          </div>
        </div>
      )}
      <div className="jigdiv">
        <button className="frame"  onClick={() => setJigsaw(true)}>
        <img
          className={block ? 'block' : 'frame'}
          src="../../public/dinner-images/lucas-map.png"
          alt="frame with map"
          />
          </button>
      </div>

      {lockNum && (
        <div className="popup-overlay">
          <div className="game-popup">
            <CombinationLock setLockNum={setLockNum} />
          </div>
        </div>
      )}
      <div className="lockdiv">
        <button className="lock"  onClick={() => setLockNum(true)}>
          <img
            className={block ? 'block' : 'lock'} 
            src="../../public/dinner-images/door-handle.png"
            alt="frame with map"
          />
        </button>
      </div>
      
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
      <div className="platediv">
        <button className="plateR" onClick={() => setMatching(true)}>
        <img              
        // className={block ? 'block' : 'plateR'}
            src="../../public/dinner-images/plate-right.png"
            alt="frame with map"
          />
        </button>
      </div>


      {matchingE && (
        <div className="popup-overlay">
          <div className="game-popup">
            <MatchingExample setMatching={setMatchingE} />
          </div>
        </div>
      )}
     
      <div className="platediv">
        <button className="plateL" onClick={() => setMatching(true)}>
        <img              
        className={block ? 'block' : 'plateL'}
            src="../../public/dinner-images/plate-left.png"
            alt="frame with map"
          />
        </button>
      </div>



      {clock && (
        <div className="popup-overlay">
          <div className="game-popup">
            <Clock setClock={setClock} />
          </div>
        </div>
      )}
      <div className="clockdiv">
      <button className="clockbod" onClick={() => setClock(true)}>
      <img              
        className={block ? 'block' : 'clockbod'}
            src="../../public/dinner-images/clock-body.png"
            alt="frame with map"
          />
      </button>
      </div>
    </>
  )
}
