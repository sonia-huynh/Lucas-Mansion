import { useState } from 'react'
import '../../styles/matching.css'

interface Props {
  setMatching: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Matching({ setMatching }: Props) {
  const [arr, setArr] = useState(['small fork', 'big fork', 'biggest fork'])
  const correctAns = ['small fork', 'big fork']

  console.log(arr)

  function handleClick(itemI: number, direction: number) {
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
        {arr.map((item, index) => (
          <div key="item" className="item">
            <p>{item}</p>
            {index === 0 ? (
              <button onClick={() => handleClick(index, 1)}>{'>'}</button>
            ) : index === arr.length - 1 ? (
              <button onClick={() => handleClick(index, -1)}>{'<'}</button>
            ) : (
              <>
                <button onClick={() => handleClick(index, -1)}>{'<'}</button>
                <button onClick={() => handleClick(index, 1)}>{'>'}</button>
              </>
            )}
          </div>
        ))}
        {/* <div className="item">
          <p>small fork</p>
          <button>{'>'}</button>
        </div>
        <div className="item">
          <p>BIG fork</p>
          <button onClick={() => handleClick(1, -1)}>{'<'}</button>
          <button onClick={() => handleClick(1, 1)}>{'>'}</button>
        </div>
        <div className="item">
          <p>BIGGEST fork</p>
          <button onClick={() => handleClick(2, -1)}>{'<'}</button>
        </div> */}
      </div>
    </>
  )
}
