import "./Cell.css";
import classNames from "classnames";
export const Cell = ({ value, canHighligh }) => {
  const cellClass = classNames({
    cell: true,
    winner: canHighligh,
  });
  const cellContentClasses = classNames({
    "cell-content": true,
    populated: value,
  });

  return (
    <button className={cellClass}>
      <span className={cellContentClasses}>{value}</span>
    </button>
  );
};
