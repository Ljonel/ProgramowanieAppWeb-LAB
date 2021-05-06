import React, { FC } from "react";

export type CellValue = "x" | "o" | undefined;

export interface CellProps {
  value: CellValue;
  toggle(index: number): void;
  index: number;
}

const Cell: FC<CellProps> = ({ value, toggle, index }) => {
  return (
    <button className="cell" onClick={() => toggle(index)}>
      {value === "o" ? "O" : value ? "X" : null}
    </button>
  );
};

export default Cell;
