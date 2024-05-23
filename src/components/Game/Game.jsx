import { useState } from "react";
import { Board } from "../Board/Board";
import "./Game.css";

export const Game = () => {
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const winningCombunation = [];
  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";
  const onCellClick = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];
      newCellValues[cellIndex] = xIsNext ? "X" : "O";
      setCellValues(newCellValues);
      setXIsNext(!xIsNext);
    }
  };
  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellValues={cellValues}
          winningCombunation={winningCombunation}
          cellClick={onCellClick}
        />
      </div>

      <div id="modal-overlay">
        <div id="game-result-modal">
          <div id="result-container">
            <div id="winner-container">
              <span></span>
            </div>
          </div>
          <div id="new-game-container">
            <button id="new-game-button">Start New Game</button>
          </div>
        </div>
      </div>
    </>
  );
};
