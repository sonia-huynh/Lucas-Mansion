import React, { useState } from 'react';
import Puzzle from './Puzzle';
import '../../styles/jigsaw.css';

interface Props {
  setJigsaw: React.Dispatch<React.SetStateAction<boolean>>
}

const Jigsaw: React.FC<Props> = ({ setJigsaw }) => {
  return (
    <>
      <div className="popup">
        <div className="popup_inner">
          <h1>Jigsaw</h1>
          <button className="closeButton" onClick={() => setJigsaw(false)}>x</button>
          {/* Include the Puzzle component directly */}
          <Puzzle />
        </div>
      </div>
    </>
  )
}

export default Jigsaw;






