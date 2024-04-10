import { useState } from 'react'
import Jigsaw from './GamePopups/Jigsaw'

export default function Dinner() {
  const [jigsaw, setJigsaw] = useState(false)
  return <>{jigsaw && <Jigsaw />}Dinner</>
}
