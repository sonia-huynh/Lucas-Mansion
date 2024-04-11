import React, { useState } from 'react';

const Rows = 5;
const Columns = 5;

const Puzzle: React.FC = () => {
  let currTile: HTMLImageElement | null = null;
  const otherTile: HTMLImageElement | null = null;

  let turns = 0;

  const dragStart = (e: React.DragEvent<HTMLImageElement>) => {
    currTile = e.target as HTMLImageElement
  };

  const dragOver = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  const dragEnter = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
  };

  const dragLeave = () => {
  };

  const dragDrop = () => {
    if (currTile && otherTile) {
      otherTile.src = currTile.src;
      currTile.src = otherTile.src;
    }
  };

  // Function to handle drag end
  const dragEnd = () => {
    if (currTile && currTile.src.includes("blank")) {
      return;
    }
    turns += 1;
    // You can set the turns state here if you want to display the number of turns
    console.log("Turns: ", turns);
  };

// Initialize the 5x5 board
const initializeBoard = () => {
    const board = [];
    for (let r = 0; r < Rows; r++) {
      for (let c = 0; c < Columns; c++) {
        board.push(
          <img
            key={`row${r}col${c}`}
            src="../PuzzleImages/blank.jpg" // Path to blank.jpg
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
          />
        );
      }
    }
    return board;
  };
  
 // Generate puzzle pieces
const generatePieces = () => {
    const pieces = ["corner1", "entrance", "exit", "middle"]; // List of puzzle piece image names
    const puzzlePieces = pieces.map((piece, index) => (
      <img
        key={`piece${index}`}
        src={`../PuzzleImages/${piece}.png`} // Path to the puzzle piece images
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={dragDrop}
        onDragEnd={dragEnd}
      />
    ));
  
    return puzzlePieces;
  };
  
  

  return (
    <div>
      <div id="board">
        {initializeBoard()}
      </div>
      <div id="pieces">
        {generatePieces()}
      </div>
    </div>
  );
};

export default Puzzle;

