import { useState } from 'react'
import '../../../public/puzzle-images/middle.png'
import '../../styles/puzzle.css'

export default function JigsawPuzzle() {
  const piece1 = 'puzzle-images/entrance.png'
  const piece2 = 'puzzle-images/corner1.png'
  const piece3 = 'puzzle-images/exit.png'

  const [pieces, setPieces] = useState([piece1, piece2, piece3])
  const answer = [piece1, piece2, piece3]
  const [placedPieces, setPlacedPieces] = useState(['', '', ''])
  const [clickedPiece, setClickedPiece] = useState('')

  function handleClickPiece(index: number) {
    setClickedPiece(pieces[index])
  }

  console.log(clickedPiece)

  function handleClickBoard(index: number) {
    // for (let i = 0; i < placedPieces.length; i++) {
    //   if (i === index) {
    // const newArr = placedPieces.splice(e.target.id, 1, clickedPiece)
    // console.log(newArr)
    // setPlacedPieces(newArr)
    //   }
    // }
    // setPlacedPieces(placedPieces[index])
    for (let i = 0; i < placedPieces.length; i++) {
      if (i === index) {
        placedPieces[i] = clickedPiece
      }
    }
  }

  console.log(placedPieces)

  return (
    <>
      {/* <div className="puzzle-container">
        <img
          src="puzzle-images/middle.png"
          alt="puzzle piece"
          id="middle-piece"
        />
      </div> */}
      <div className="puzzle-board">
        <button id="0" onClick={() => handleClickBoard(0)}>
          0
        </button>
        <button>1</button>
        <button>2</button>
      </div>
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
