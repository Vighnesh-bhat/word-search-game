import React, { useState, useEffect } from 'react';

const Grid = ({highlightedCells,tempGrid,isFound}) => {
  const [grid, setGrid] = useState([]);
  
  useEffect(() => {
    setGrid(tempGrid);
  }, []);



  return (
    <div>
      <div className="grid-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((char, charIndex) => (
              <div
                onClick={()=>isFound(rowIndex,charIndex)}
                key={charIndex}
                className={`grid-item ${
                  highlightedCells.some(
                    (cell) => cell[0] === rowIndex && cell[1] === charIndex
                  )
                    ? 'highlighted'
                    : ''
                }`}
              >
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
