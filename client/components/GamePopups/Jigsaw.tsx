import React from 'react'
import Puzzle from './Puzzle'
import '../../styles/jigsaw.css'
import JigsawPuzzle from './JigsawPuzzle'

interface Props {
  setJigsaw: React.Dispatch<React.SetStateAction<boolean>>
}

const Jigsaw: React.FC<Props> = ({ setJigsaw }) => {
  return (
    <>
      <div className="popup">
        <div className="popup_inner">
          <button className="closeButton" onClick={() => setJigsaw(false)}>
            x
          </button>
          <JigsawPuzzle />
          {/* <Puzzle /> */}
        </div>
      </div>
    </>
  )
}

export default Jigsaw
