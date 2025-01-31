import React from "react";
import "./Style.css";

const Grid = ({ rows = 15, cols = 10 }) => {
  const getColor = (row, col) => {
    const blueCondition = (row < 10 && col === row) || (row >= 10 && col === 19 - row);
    const orangeCondition = (row < 10 && col === cols - row - 1) || (row >= 10 && col === row - 10);
    
    if (blueCondition) return "blue";
    if (orangeCondition) return "orange moving";  // Apply moving effect
    return "default";
  };

  return (
    <div 
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 40px)`, 
      }}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        Array.from({ length: cols }).map((_, colIndex) => {
          const num = rowIndex * cols + colIndex + 1;
          return (
            <div key={num} className={`cell ${getColor(rowIndex, colIndex)}`}>
              {num}
            </div>
          );
        })
      ))}
    </div>
  );
};

export default Grid;