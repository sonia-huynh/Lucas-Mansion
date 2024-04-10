import { useState } from 'react'
import '../../styles/matching.css'

interface Props {
  setMatching: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Matching({ setMatching }: Props) {
  const bigFork = 'big fork'
  const smallFork = 'small fork'
  const [arr, setArr] = useState([smallFork, bigFork])
  const correctAns = ['small fork', 'big fork']

  console.log(arr)

  function handleToLeft(item: string, itemI: number, direction: number) {
    const newArr = []
    const deletedItemArr = []
    for (let i = 0; i < arr.length; i++) {
      // if (i === itemI - 1) {
      if (i === itemI + direction) {
        newArr[i] = item
      } else if (i < itemI) {
        newArr[i] = arr[i]
      }
    }
    // setArr(newArr)
    console.log(newArr)
  }

  return (
    <>
      <h1>Matching</h1>
      <button onClick={() => setMatching(false)}>Close</button>
      <div className="matching">
        <div className="item">
          <p>small fork</p>
          <button>{'>'}</button>
        </div>
        <div className="item">
          <p>BIG fork</p>
          <button onClick={() => handleToLeft(bigFork, 1, -1)}>{'<'}</button>
        </div>
      </div>
    </>
  )
}
