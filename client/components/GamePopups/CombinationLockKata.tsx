import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  setLockNum: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CombinationLockKata({ setLockNum }: Props) {
  const [pin1, setPin1] = useState(0)

  return (
    <>
      <h1>Combination Lock Kata</h1>
      <button onClick={() => setLockNum(false)}>Close</button>
    </>
  )
}
