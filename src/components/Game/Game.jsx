import { useState } from "react";
import { Board } from "../Board/Board";
import { ResultModal } from "../ResultModal/ResultModal";
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
  const [isGameOver, setIsGameOver] = useState(false);
  const winningCombunation = [];
  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";
  const onCellClick = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];
      // calculate the result

      newCellValues[cellIndex] = xIsNext ? "X" : "O";
      setCellValues(newCellValues);
      setXIsNext(!xIsNext);
      setIsGameOver(true);
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
        <ResultModal isGameOver={isGameOver} />
      </div>
    </>
  );
};
