import "./Board.css";
import { Cell } from "../Cell/Cell";
export const Board = ({ winningCombunation, cellValues, cellClick }) => {
  const cells = cellValues.map((cellvalue, index) => {
    const canHighligh =
      winningCombunation && winningCombunation.indexOf(index) >= 0;

    return (
      <Cell
        key={index}
        value={cellvalue}
        canHighligh={canHighligh}
        onClick={() => cellClick(index)}
      />
    );
  });

  return <div id="board">{cells}</div>;
};
