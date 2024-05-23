import "./Board.css";
import { Cell } from "../Cell/Cell";
export const Board = () => {
  const cellValues = ["X", "X", "X", "O", "O", "X", "O", "X", "O"];
  return (
    <div id="board">
      {cellValues.map((cellvalue) => (
        <Cell value={cellvalue} canHighligh={false} />
      ))}
    </div>
  );
};
