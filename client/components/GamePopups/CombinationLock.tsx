import { useState } from 'react'

interface Props {
  setLock: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CombinationLock({ setLock }: Props) {
  const [pinOne, setPinOne] = useState(0)
  const [pinTwo, setPinTwo] = useState(0)
  const [pinThree, setPinThree] = useState(0)
  const [pinFour, setPinFour] = useState(0)

  function handleSubmit() {
    if (pinOne === 9 && pinTwo === 3 && pinThree === 6 && pinFour === 2) {
      console.log('correct!')
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
