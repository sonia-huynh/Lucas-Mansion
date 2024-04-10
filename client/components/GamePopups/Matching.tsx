import { useState } from 'react'
import '../../styles/matching.css'

interface Props {
  setMatching: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Matching({ setMatching }: Props) {
  const [arr, setArr] = useState(['small fork', 'big fork', 'biggest fork'])
  const correctAns = ['small fork', 'big fork']

  console.log(arr)

  function handleToLeft(itemI: number, direction: number) {
    const newArr = []
    const temp = arr[itemI + direction]
    for (let i = 0; i < arr.length; i++) {
      if (itemI + direction === i) {
        newArr[itemI + direction] = arr[itemI]
      } else if (itemI === i) {
        newArr[i] = temp
      } else {
        newArr[i] = arr[i]
      }
    }
    console.log(newArr)
    setArr(newArr)
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
          <button onClick={() => handleToLeft(1, -1)}>{'<'}</button>
        </div>
        <div className="item">
          <p>BIGGEST fork</p>
          <button onClick={() => handleToLeft(2, -1)}>{'<'}</button>
        </div>
      </div>
    </>
  )
}
