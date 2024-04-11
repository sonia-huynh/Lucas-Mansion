import { useState } from 'react'
import '../../styles/matching.css'

interface Props {
  setMatching: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Matching({ setMatching }: Props) {
  const [arr, setArr] = useState(['small fork', 'big fork', 'biggest fork'])
  const correctAns = ['small fork', 'big fork', 'biggest fork']
  const [win, setWin] = useState(false)

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

  function handleCheck() {
    setWin(true)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== correctAns[i]) {
        setWin(false)
        console.log('not a win')
      }
    }
    // if (arr == correctAns) {
    //   setWin(true)
    // } else {
    //   console.log(`${correctAns} - try again`)
    // }
  }

  return (
    <>
      <h1>Matching</h1>
      <button onClick={() => setMatching(false)}>Close</button>
      <div className="matching">
        {arr.map((item, index) => (
          <div key={index} className="item">
            <p>{item}</p>
            {index === 0 ? (
              <button onClick={() => handleClick(index, 1)}>{'>'}</button>
            ) : index === arr.length - 1 ? (
              <button onClick={() => handleClick(index, -1)}>{'<'}</button>
            ) : (
              <div>
                <button onClick={() => handleClick(index, -1)}>{'<'}</button>
                <button onClick={() => handleClick(index, 1)}>{'>'}</button>
              </div>
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
      {win ? (
        <p>go get the key</p>
      ) : (
        <button onClick={() => handleCheck()}>Check</button>
      )}
    </>
  )
}
