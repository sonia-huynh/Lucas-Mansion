import React from 'react'
import Puzzle from './Puzzle'
import '../../styles/jigsaw.css'
import JigsawPuzzle from './JigsawPuzzle'

interface Props {
  setJigsaw: React.Dispatch<React.SetStateAction<boolean>>
  setWin: React.Dispatch<React.SetStateAction<boolean>>
  win: boolean
}

const Jigsaw: React.FC<Props> = ({ setJigsaw, setWin, win }) => {
  return (
    <>
      <div className="map-popup">
        {/* <div className="popup_inner"> */}
        <button className="closeButton" onClick={() => setJigsaw(false)}>
          x
        </button>
        {!win ? <JigsawPuzzle win={win} setWin={setWin} /> : <Puzzle />}
        {/* </div> */}
      </div>
    </>
  )
}

export default Jigsaw
