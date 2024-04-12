import { useState } from 'react'
import '../../../public/puzzle-images/middle.png'
import '../../styles/puzzle.css'

export default function JigsawPuzzle() {
  const piece1 = 'puzzle-images/entrance.png'
  const piece2 = 'puzzle-images/corner1.png'
  const piece3 = 'puzzle-images/exit.png'

  const [pieces, setPieces] = useState([piece3, piece1, piece2])
  const correctAns = [piece1, piece2, piece3]
  const [placedPieces, setPlacedPieces] = useState(['', '', ''])
  const [clickedPiece, setClickedPiece] = useState('')
  const [win, setWin] = useState(false)

  function handleClickPiece(index: number) {
    setClickedPiece(pieces[index])
  }

  console.log(clickedPiece)

  function handleClickBoard(index: number) {
    for (let i = 0; i < placedPieces.length; i++) {
      if (i === index) {
        placedPieces[i] = clickedPiece
        setClickedPiece('')
      }
    }
  }

  console.log(placedPieces)

  function checkWin() {
    setWin(true)
    for (let i = 0; i < placedPieces.length; i++) {
      if (placedPieces[i] !== correctAns[i]) {
        setWin(false)
        console.log('not a win')
      }
    }
  }

  console.log(win)

  return (
    <>
      <div className="puzzle-container">
        <div className="middle">
          <img src="puzzle-images/middle.png" alt="puzzle piece" />
        </div>
        <div className="entrance">
          {!placedPieces[0] ? (
            <button onClick={() => handleClickBoard(0)}>0</button>
          ) : (
            <img alt="puzzle-piece" src={placedPieces[0]} />
          )}
        </div>
        <div className="corner">
          {!placedPieces[1] ? (
            <button onClick={() => handleClickBoard(1)}>1</button>
          ) : (
            <img alt="puzzle-piece" src={placedPieces[1]} />
          )}
        </div>
        <div className="exit">
          {!placedPieces[2] ? (
            <button onClick={() => handleClickBoard(2)}>2</button>
          ) : (
            <img alt="puzzle-piece" src={placedPieces[2]} />
          )}
        </div>
        {/* {placedPieces.map()} */}
      </div>

      <button onClick={checkWin}>check answer</button>
      {/* pieces from around the room render below */}
      <div className="pieces">
        {pieces.map((piece, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <img
            src={piece}
            alt="puzzle"
            key={index}
            onClick={() => handleClickPiece(index)}
          />
        ))}
      </div>
    </>
  )
}
