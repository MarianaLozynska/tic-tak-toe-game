import "./Cell.css";
import classNames from "classnames";
export const Cell = ({ value, canHighligh, onClick }) => {
  const cellClass = classNames({
    cell: true,
    winner: canHighligh,
  });
  const cellContentClasses = classNames({
    "cell-content": true,
    populated: value,
  });

  return (
    <button className={cellClass} onClick={onClick}>
      <span className={cellContentClasses}>{value}</span>
    </button>
  );
};
