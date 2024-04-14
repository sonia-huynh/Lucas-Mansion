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
    // const newString = pieces[removeIndex].replace('.png', '-empty.png')
    pieces[removeIndex] = ''
    // placing selected piece on puzzle board
    for (let i = 0; i < placedPieces.length; i++) {
      if (i === index) {
        placedPieces[i] = clickedPiece
        setClickedPiece('')
      }
    }
  }

  console.log(placedPieces)

  function checkWin() {
    let isWin = true
    console.log('checkingAnswer')

    // check piece placement
    for (let i = 0; i < placedPieces.length; i++) {
      if (placedPieces[i] !== correctAns[i]) {
        isWin = false
        console.log('not a win')
        break
      }
    }

    // check rotation of pieces
    if (rotationStates[0] !== 0) isWin = false
    if (rotationStates[1] !== 0) isWin = false
    if (rotationStates[2] !== 0) isWin = false

    setWin(isWin)
    if (win === true) console.log(`you win! - ${win}`)
    if (win === false) console.log(`not right :( - ${win}`)
  }

  function handleRotation(index: number): void {
    const newRotatedPieces = [...rotationStates]
    newRotatedPieces[index] = rotationStates[index] + 90
    setRotationStates(newRotatedPieces)
  }

  console.log(win)

  return (
    <div className="puzzle-table">
      <div className="puzzle-container">
        <div className="puzzle-outline">
          <div className="middle">
            <img src="puzzle-images/middle.png" alt="puzzle piece" />
          </div>

          {!placedPieces[0] ? (
            <div className="entrance-empty empty-slot">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
            jsx-a11y/no-noninteractive-element-interactions */}
              <img
                src="puzzle-images/entrance-empty.png"
                alt="button-0"
                onClick={() => handleClickBoard(0)}
              />
            </div>
          ) : placedPieces[0] === correctAns[0] ? (
            <div className="entrance">
              <img
                alt="puzzle-piece"
                src={placedPieces[0]}
                style={{ transform: `rotate(${rotationStates[1]}deg)` }}
              />
            </div>
          ) : placedPieces[0] === correctAns[1] ? (
            <div className="entrance">
              <img
                alt="puzzle-piece"
                src={placedPieces[0]}
                style={{ transform: `rotate(${rotationStates[2]}deg)` }}
              />
            </div>
          ) : (
            <div className="entrance">
              <img
                alt="puzzle-piece"
                src={placedPieces[0]}
                style={{ transform: `rotate(${rotationStates[0]}deg)` }}
              />
            </div>
          )}

          {!placedPieces[1] ? (
            <div className="corner-empty empty-slot">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
              <img
                src="puzzle-images/corner1-empty.png"
                alt="button-1"
                onClick={() => handleClickBoard(1)}
              />
            </div>
          ) : placedPieces[1] === correctAns[0] ? (
            <div className="corner">
              <img
                alt="puzzle-piece"
                src={placedPieces[1]}
                style={{ transform: `rotate(${rotationStates[1]}deg)` }}
              />
            </div>
          ) : placedPieces[1] === correctAns[1] ? (
            <div className="corner">
              <img
                alt="puzzle-piece"
                src={placedPieces[1]}
                style={{ transform: `rotate(${rotationStates[2]}deg)` }}
              />
            </div>
          ) : (
            <div className="corner">
              <img
                alt="puzzle-piece"
                src={placedPieces[1]}
                style={{ transform: `rotate(${rotationStates[0]}deg)` }}
              />
            </div>
          )}
          {!placedPieces[2] ? (
            <div className="exit-empty empty-slot">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
              <img
                src="puzzle-images/exit-empty.png"
                alt="button-2"
                onClick={() => handleClickBoard(2)}
              />
            </div>
          ) : placedPieces[2] === correctAns[0] ? (
            <div className="exit">
              <img
                alt="puzzle-piece"
                src={placedPieces[2]}
                style={{ transform: `rotate(${rotationStates[1]}deg)` }}
              />
            </div>
          ) : placedPieces[2] === correctAns[1] ? (
            <div className="exit">
              <img
                alt="puzzle-piece"
                src={placedPieces[2]}
                style={{ transform: `rotate(${rotationStates[2]}deg)` }}
              />
            </div>
          ) : (
            <div className="exit">
              <img
                alt="puzzle-piece"
                src={placedPieces[2]}
                style={{ transform: `rotate(${rotationStates[0]}deg)` }}
              />
            </div>
          )}
        </div>
      </div>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        alt="submit-button"
        src="puzzle-images/tape.png"
        onClick={checkWin}
        id="submit"
      />
      {/* pieces from around the room render below */}
      <div className="pieces">
        {pieces.map((piece, index) => (
          <div key={index} className="inventory-pieces">
            {piece !== '' && (
              <>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                <img
                  src={piece}
                  alt="puzzle"
                  onClick={() => handleClickPiece(index)}
                  className="inventory-piece"
                  style={{ transform: `rotate(${rotationStates[index]}deg)` }}
                />

                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                <img
                  src="puzzle-images/rotate-dark.png"
                  alt="rotation-button"
                  className="rotate-button"
                  style={{ height: '20px', width: '20px' }}
                  onClick={() => handleRotation(index)}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
