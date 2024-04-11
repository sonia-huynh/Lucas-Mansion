import { useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'
import CombinationLock from './GamePopups/CombinationLock'
import Matching from './GamePopups/Matching'
import MatchingExample from './GamePopups/MatchingExample'
import Clock from './GamePopups/Clock'

export default function Dinner() {
  const [jigsaw, setJigsaw] = useState(false)
  const [lock, setLock] = useState(false)
  const [matching, setMatching] = useState(true)
  const [matchingE, setMatchingE] = useState(false)
  const [clock, setClock] = useState(false)

  return (
    <>
      <h1>Dinner</h1>
      {jigsaw && <Jigsaw setJigsaw={setJigsaw} />}
      {lock && <CombinationLock setLock={setLock} />}
      {matching && <Matching setMatching={setMatching} />}
      {matchingE && <MatchingExample setMatchingE={setMatchingE} />}
      {clock && <Clock setClock={setClock} />}
    </>
  )
}
