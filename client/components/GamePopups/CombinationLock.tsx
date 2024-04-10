import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  setLock: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CombinationLock({ setLock }: Props) {
  const navigate = useNavigate()
  const [pinOne, setPinOne] = useState(0)
  const [pinTwo, setPinTwo] = useState(0)
  const [pinThree, setPinThree] = useState(0)
  const [pinFour, setPinFour] = useState(0)

  function handleSubmit() {
    if (pinOne === 1 && pinTwo === 1 && pinThree === 1 && pinFour === 1) {
      console.log('correct!')
      navigate('/Foyer')
    } else {
      console.log('Nope')
    }
  }

  return (
    <>
      <h1>Lock</h1>
      <input
        type="number"
        max="9"
        min="0"
        value={pinOne}
        onChange={(e) => setPinOne(Number(e.target.value))}
      ></input>
      <input
        type="number"
        max="9"
        min="0"
        value={pinTwo}
        onChange={(e) => setPinTwo(Number(e.target.value))}
      ></input>
      <input
        type="number"
        max="9"
        min="0"
        value={pinThree}
        onChange={(e) => setPinThree(Number(e.target.value))}
      ></input>
      <input
        type="number"
        max="9"
        min="0"
        value={pinFour}
        onChange={(e) => setPinFour(Number(e.target.value))}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => setLock(false)}>Close</button>
    </>
  )
}
