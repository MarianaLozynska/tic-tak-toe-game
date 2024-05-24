import { useState } from "react";
import { Board } from "../Board/Board";
import { ResultModal } from "../ResultModal/ResultModal";
import "./Game.css";
import { calculateWinner } from "../../utils/WinnerCalculator";

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
  const [numberOfTurnsLeft, setNumberofTurnsLeft] = useState(9);
  const [winner, setWinner] = useState();
  const [winningCombunation, setWinningCombination] = useState([]);
  const isCellEmpty = (cellIndex) => cellValues[cellIndex] === "";
  const onCellClick = (cellIndex) => {
    if (isCellEmpty(cellIndex)) {
      const newCellValues = [...cellValues];
      newCellValues[cellIndex] = xIsNext ? "X" : "O";
      const newNumberOfTurnsLeft = numberOfTurnsLeft - 1;
      // calculate the result
      const calcResult = calculateWinner(
        newCellValues,
        newNumberOfTurnsLeft,
        cellIndex
      );
      setCellValues(newCellValues);
      setXIsNext(!xIsNext);
      setIsGameOver(calcResult.hasResult);
      setNumberofTurnsLeft(newNumberOfTurnsLeft);
      setWinner(calcResult.winner);
      setWinningCombination(calcResult.winningCombunation);
    }
  };
  const restartGame = () => {
    setCellValues(["", "", "", "", "", "", "", "", ""]);
    setXIsNext(true);
    setIsGameOver(false);
    setNumberofTurnsLeft(9);
    setWinner(undefined);
    setWinningCombination([]);
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
        <ResultModal
          isGameOver={isGameOver}
          winner={winner}
          onNewGameCliked={restartGame}
        />
      </div>
    </>
  );
};
