import "./ResultModal.css";
import classNames from "classnames";

export const ResultModal = ({ isGameOver, winner, onNewGameCliked }) => {
  const resultModalClasses = classNames({
    "modal-open": isGameOver,
  });
  const message = winner ? `Winner is ${winner}` : "It's a draw";
  return (
    <div id="modal-overlay" className={resultModalClasses}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span>{message}</span>
          </div>
        </div>
        <div id="new-game-container">
          <button onClick={onNewGameCliked} id="new-game-button">
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
};
