import { useState } from 'react'
import '../../../public/puzzle-images/middle.png'
import '../../styles/puzzle.css'

export default function JigsawPuzzle() {
  const piece1 = 'puzzle-images/entrance.png'
  const piece2 = 'puzzle-images/corner1.png'
  const piece3 = 'puzzle-images/exit.png'

  const [pieces, setPieces] = useState([piece3, piece1, piece2])
  const [rotationStates, setRotationStates] = useState([0, 0, 0])

  const correctAns = [piece1, piece2, piece3]
  const [placedPieces, setPlacedPieces] = useState(['', '', ''])
  const [clickedPiece, setClickedPiece] = useState('')
  const [win, setWin] = useState(false)

  function handleClickPiece(index: number): void {
    setClickedPiece(pieces[index])
  }

  console.log(clickedPiece)

  function handleClickBoard(index: number): void {
    // removing img selected from option
    const removeIndex = pieces.indexOf(clickedPiece)
    const newString = pieces[removeIndex].replace('.png', '-empty.png')
    pieces[removeIndex] = newString
    // placing selected piece on puzzle board
    for (let i = 0; i < placedPieces.length; i++) {
      if (i === index) {
        placedPieces[i] = clickedPiece
        setClickedPiece('')
      }
    }
  }

  console.log(placedPieces)

  function checkWin(): void {
    setWin(true)
    for (let i = 0; i < placedPieces.length; i++) {
      if (placedPieces[i] !== correctAns[i]) {
        setWin(false)
        console.log('not a win')
      }
    }
  }

  console.log(win)

  function handleRotation(index: number): void {
    const newRotatedPieces = [...rotationStates]
    newRotatedPieces[index] = rotationStates[index] + 90
    setRotationStates(newRotatedPieces)
  }

  return (
    <>
      <div className="puzzle-container">
        <div className="middle">
          <img src="puzzle-images/middle.png" alt="puzzle piece" />
        </div>
        <div className="entrance">
          {!placedPieces[0] ? (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              src="puzzle-images/entrance-empty.png"
              alt="button-0"
              onClick={() => handleClickBoard(0)}
            />
          ) : (
            <img alt="puzzle-piece" src={placedPieces[0]} />
          )}
        </div>
        <div className="corner">
          {!placedPieces[1] ? (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              src="puzzle-images/corner1-empty.png"
              alt="button-1"
              onClick={() => handleClickBoard(1)}
            />
          ) : (
            <img alt="puzzle-piece" src={placedPieces[1]} />
          )}
        </div>
        <div className="exit">
          {!placedPieces[2] ? (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              src="puzzle-images/exit-empty.png"
              alt="button-2"
              onClick={() => handleClickBoard(2)}
            />
          ) : (
            <img alt="puzzle-piece" src={placedPieces[2]} />
          )}
        </div>
      </div>

      <button onClick={checkWin}>check answer</button>
      {/* pieces from around the room render below */}
      <div className="pieces">
        {pieces.map((piece, index) => (
          <div key={index}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
            <img
              src={piece}
              alt="puzzle"
              onClick={() => handleClickPiece(index)}
              style={{ transform: `rotate(${rotationStates[index]}deg)` }}
            />
            <button onClick={() => handleRotation(index)}>rotate</button>
          </div>
        ))}
      </div>
    </>
  )
}
