import { useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'

export default function Dinner() {
  const [jigsaw, setJigsaw] = useState(false)
  return (
    <>
      <h1>Dinner</h1>
      {jigsaw && <Jigsaw setJigsaw={setJigsaw} />}
    </>
  )
}
