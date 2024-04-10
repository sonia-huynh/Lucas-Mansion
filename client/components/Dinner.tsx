import { useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'

export default function Dinner() {
  const [jigsaw, setJigsaw] = useState(true)
  return <>{jigsaw && <Jigsaw setJigsaw={setJigsaw} />}Dinner</>
}
