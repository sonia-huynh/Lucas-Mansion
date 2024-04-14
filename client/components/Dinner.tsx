import { useEffect, useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'
import Matching from './GamePopups/Matching'
import MatchingExample from './GamePopups/MatchingExample'
import Clock from './GamePopups/Clock'
import CombinationLock from './GamePopups/CombinationLock'
import "/lucas-no-map.png"

//clues:
import ClockFace from './CluePopups/ClockFace'
import Gnome from './CluePopups/Gnome'
import Stool from './CluePopups/Stool'
import Chest from './CluePopups/Chest'
import Duck from './CluePopups/Duck'
import Mirror from './CluePopups/Mirror'
import Pumpkin from './CluePopups/Pumpkin'
import Chandelier from './CluePopups/Chandelier'

//style:
import '../styles/popup.css'
import '../styles/main.css'
import '../styles/dinner.css'

export default function Dinner() {
  const [block, setBlock] = useState(true)

  //game popups:
  const [jigsaw, setJigsaw] = useState(false)
  const [jigsawWin, setJigsawWin] = useState(false)
  const [matching, setMatching] = useState(false)
  const [matchingWin, setMatchingWin] = useState(false)
  const [matchingE, setMatchingE] = useState(false)
  const [lockNum, setLockNum] = useState(false)

  //clue popups:
  const [clockFace, setClockFace] = useState(false)
  const [clock, setClock] = useState(false)
  const [gnome, setGnome] = useState(false)
  const [stool, setStool] = useState(false)
  const [chest, setChest] = useState(false)
  const [duck, setDuck] = useState(false)
  const [mirror, setMirror] = useState(false)
  const [pumpkin, setPumpkin] = useState(false)
  const [chandelier, setChandelier] = useState(false)

  useEffect(() => {
    if (
      !jigsaw &&
      !matchingE &&
      !matching &&
      !matchingWin &&
      !clock &&
      !lockNum &&
      !clockFace &&
      !gnome &&
      !stool &&
      !chest &&
      !duck &&
      !mirror &&
      !pumpkin &&
      !chandelier
    ) {
      setBlock(false)
    } else {
      setBlock(true)
    }
  }, [
    jigsaw,
    matching,
    matchingE,
    clock,
    lockNum,
    block,
    clockFace,
    gnome,
    stool,
    chest,
    matchingWin,
    duck,
    mirror,
    pumpkin,
    chandelier,
  ])



  return (
  
    <div className="dinner">
      {jigsaw && (
        <div className="popup-overlay">
          <div className="map-popup">
            <Jigsaw
              setJigsaw={setJigsaw}
              win={jigsawWin}
              setWin={setJigsawWin}
            />
          </div>
        </div>
      )}

      {jigsawWin === true ? 
      <img
      className= {block ? 'block' : 'noMap'}
      src="/lucas-no-map.png"
      alt="frame with map"
    />
      :   
      <div className="jigdiv">
        <button className="frame" onClick={() => setJigsaw(true)}>
          <img
            className={block ? 'block' : 'frame'}
            src="../../public/dinner-images/lucas-map2.png"
            alt="frame with map"
          />
        </button>
      </div>}
    

      {lockNum && (
        <div className="popup-overlay">
          <div className="game-popup">
            <CombinationLock setLockNum={setLockNum} />
          </div>
        </div>
      )}
      <div className="lockdiv">
        <button className="lock" onClick={() => setLockNum(true)}>
          <img
            className={block ? 'block' : 'lock'}
            src="../../public/dinner-images/door-handle.png"
            alt="doorknob with lock"
          />
        </button>
      </div>
   
      {clock && (
        <div className="popup-overlay">
          <div className="clockbod-popup">
            <Clock setClock={setClock} />
          </div>
        </div>
      )}
    <div className="clockdiv">
        <button className="clockbod" onClick={() => setClock(true)}>
          <img
            className={block ? 'block' : 'clockbod'}
            src="../../public/dinner-images/clock-body.png"
            alt="clock body with lantern and piece of paper"
            />
        </button>
      </div>

      {matchingE && (
        <div className="popup-overlay">
          <div className="game-popup">
            <MatchingExample setMatchingE={setMatchingE} />
          </div>
        </div>
      )}

      <div className="platediv">
        <button className="plateL" onClick={() => setMatchingE(true)}>
          <img
            className={block ? 'block' : 'plateL'}
            src="../../public/dinner-images/plate-left.png"
            alt="plate with utensils"
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
      className={block ? 'block' : 'plateR'}
      src="/dinner-images/plate-right.png"
      alt="plate with utensils in the wrong order"
      />
  </button>
      </div>


      {clockFace && (
        <div className="popup-overlay">
          <div className="clockface-popup">
            <ClockFace setClockFace={setClockFace} />
          </div>
        </div>
      )}
      <div className="clockfacediv">
        <button className="clockface" onClick={() => setClockFace(true)}>
          <img
            className={block ? 'block' : 'clockface'}
            src="../../public/dinner-images/clock-face.png"
            alt="clock face"
          />
        </button>
      </div>

      {gnome && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Gnome setGnome={setGnome} />
          </div>
        </div>
      )}
      <div className="gnomediv">
        <button className="gnome" onClick={() => setGnome(true)}>
          <img
            className={block ? 'block' : 'gnome'}
            src="../../public/dinner-images/gnome.png"
            alt="golden gnome statue"
          />
        </button>
      </div>

      {stool && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Stool setStool={setStool} />
          </div>
        </div>
      )}
      <div className="stooldiv">
        <button className="stool" onClick={() => setStool(true)}>
          <img
            className={block ? 'block' : 'stool'}
            src="../../public/dinner-images/fallen-stool.png"
            alt="fallen stool"
          />
        </button>
      </div>

      {chest && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Chest setChest={setChest} />
          </div>
        </div>
      )}
      <div className="chestdiv">
        <button className="chest" onClick={() => setChest(true)}>
          <img
            className={block ? 'block' : 'chest'}
            src="../../public/dinner-images/chest.png"
            alt="red treasure chest"
          />
        </button>
      </div>
      {duck && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Duck setDuck={setDuck} />
          </div>
        </div>
      )}
      <div className="duckdiv">
        <button className="duck" onClick={() => setDuck(true)}>
          <img
            className={block ? 'block' : 'duck'}
            src="../../public/dinner-images/duck.png"
            alt="yellow rubber duck"
          />
        </button>
      </div>
      {mirror && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Mirror setMirror={setMirror} />
          </div>
        </div>
      )}
      <div className="mirrordiv">
        <button className="mirror" onClick={() => setMirror(true)}>
          <img
            className={block ? 'block' : 'mirror'}
            src="../../public/dinner-images/mirror.png"
            alt="oval mirror"
          />
        </button>
      </div>
      {pumpkin && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Pumpkin setPumpkin={setPumpkin} />
          </div>
        </div>
      )}
      <div className="pumpkindiv">
        <button className="pumpkin" onClick={() => setPumpkin(true)}>
          <img
            className={block ? 'block' : 'pumpkin'}
            src="../../public/dinner-images/pumpkins.png"
            alt="three rotting pumpkins"
          />
        </button>
      </div>

      {chandelier && (
        <div className="popup-overlay">
          <div className="clue-popup">
            <Chandelier setChandelier={setChandelier} />
          </div>
        </div>
      )}
      <div className="chandelierdiv">
        <button className="chandelier" onClick={() => setChandelier(true)}>
          <img
            className={block ? 'block' : 'chandelier'}
            src="../../public/dinner-images/chandelier.png"
            alt="chandelier"
          />
        </button>
      </div>

      </div>
  )
}
