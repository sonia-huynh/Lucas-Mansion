import { useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'
import Matching from './GamePopups/Matching'
import MatchingExample from './GamePopups/MatchingExample'
import Clock from './GamePopups/Clock'
import CombinationLock from './GamePopups/CombinationLock'

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
      {jigsaw && <Jigsaw setJigsaw={setJigsaw} />}
      {matching && (
        <Matching
          setMatching={setMatching}
          win={matchingWin}
          setWin={setMatchingWin}
        />
      )}
      {matchingE && <MatchingExample setMatchingE={setMatchingE} />}
      {clock && <Clock setClock={setClock} />}
      {lockNum && <CombinationLock setLockNum={setLockNum} />}
    </>
  )
}
