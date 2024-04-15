import React from 'react'
import Puzzle from './Puzzle'
import JigsawPuzzle from './JigsawPuzzle'
import JigsawFrame from './JigsawFrame'

interface Props {
  setJigsaw: React.Dispatch<React.SetStateAction<boolean>>
  setWin: React.Dispatch<React.SetStateAction<boolean>>
  foundPapers: boolean[]
  win: boolean
}

const Jigsaw: React.FC<Props> = ({ setJigsaw, setWin, foundPapers, win }) => {
  let allPiecesFound = true

  for (let i = 0; i < foundPapers.length; i++) {
    if (foundPapers[i] === false) allPiecesFound = false
  }

  return (
    <>
      <div>
        <div>
          <button className="gameCloseButton close" onClick={() => setJigsaw(false)}>
            x
          </button>
          {!allPiecesFound ? (
            <JigsawFrame />
          ) : !win ? (
            <JigsawPuzzle win={win} setWin={setWin} />
          ) : (
            <Puzzle />
          )}
        </div>
      </div>
    </>
  )
}

export default Jigsaw
