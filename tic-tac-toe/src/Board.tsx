import React, { FC, useState } from "react"; //FC means functional component
import Cell, { CellValue } from "./Cell";

type Winner = CellValue | "tie";

export interface BoardProps {
  gameEnd(win: Winner): void;
}
const Board: FC<BoardProps> = ({ gameEnd }) => {
  const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined));
  const toggleCell = (index: number) => {
    setCells((cells) => cells.map((c, i) => (i === index ? "x" : c)));
  };
  return (
    <div className="board">
      {cells.map((item, i) => (
        <Cell key={i} value={item} toggle={() => toggleCell(i)} index={i} />
      ))}
    </div>
  );
};

export default Board;
