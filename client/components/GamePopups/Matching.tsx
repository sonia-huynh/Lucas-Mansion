import { useState } from 'react'
import '../../styles/matching.css'
import '../../styles/popup.css'

interface Props {
  setMatching: React.Dispatch<React.SetStateAction<boolean>>
  win: boolean
  setWin: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Matching({ setMatching, win, setWin }: Props) {
  const smallFork = '/match-up/cutlery/small-fork.png'
  const bigFork = '/match-up/cutlery/big-fork.png'
  const bigSpoon = '/match-up/cutlery/big-spoon.png'
  const teaSpoon = '/match-up/cutlery/tea-spoon.png'
  const knife = '/match-up/cutlery/knife.png'

  const [arr, setArr] = useState([
    teaSpoon,
    bigFork,
    bigSpoon,
    knife,
    smallFork,
  ])
  const correctAns = [smallFork, bigFork, knife, teaSpoon, bigSpoon]

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
  }

  return (
    <div className="match-up-game">
      <div className="plate-game">
        <div>
          <button className="closeButton" onClick={() => setMatching(false)}>
            x
          </button>
          {win ? (
            <p>go get the key</p>
          ) : (
            <button id="bell" onClick={() => handleCheck()}>
              Check
            </button>
          )}
          <div className="cutlery-items">
            {arr.map((item, index) => (
              <div key={index} className="item">
                <img src={item} alt={item} />
                {index === 0 ? (
                  <button onClick={() => handleClick(index, 1)}>{'>'}</button>
                ) : index === arr.length - 1 ? (
                  <button onClick={() => handleClick(index, -1)}>{'<'}</button>
                ) : (
                  <div>
                    <button onClick={() => handleClick(index, -1)}>
                      {'<'}
                    </button>
                    <button onClick={() => handleClick(index, 1)}>{'>'}</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
