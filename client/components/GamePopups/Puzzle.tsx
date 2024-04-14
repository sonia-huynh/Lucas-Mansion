import React from 'react'

const Rows = 1
const Columns = 1

const Puzzle: React.FC = () => {
  let currTile: HTMLImageElement | null = null
  const otherTile: HTMLImageElement | null = null

  // const turns = 0

  const dragStart = (e: React.DragEvent<HTMLImageElement>) => {
    currTile = e.target as HTMLImageElement
  }

  const dragOver = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault()
  }

  const dragEnter = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault()
  }

  const dragLeave = () => {}

  const dragDrop = () => {
    if (currTile && otherTile) {
      otherTile.src = currTile.src
      currTile.src = otherTile.src
    }
  }

  const dragEnd = () => {
    if (currTile && currTile.src.includes('blank')) {
      return
    }
    // turns += 1
  }

  const initializeBoard = () => {
    const board = []
    for (let r = 0; r < Rows; r++) {
      for (let c = 0; c < Columns; c++) {
        board.push(
          <img
            key={`row${r}col${c}`}
            src="../PuzzleImages/blank.jpg"
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
          />,
        )
      }
    }
    return board
  }

  const generatePieces = () => {
    const pieces = ['corner1', 'entrance', 'exit', 'middle']
    const puzzlePieces = pieces.map((piece, index) => (
      <img
        key={`piece${index}`}
        src={`../PuzzleImages/${piece}.png`}
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
        onDragEnd={dragEnd}
      />
    ))

    return puzzlePieces
  }
  const board = initializeBoard()
  return (
    <div>
      <div id="board">{board}</div>
      <div id="pieces">{generatePieces()}</div>
    </div>
  )
}

export default Puzzle
