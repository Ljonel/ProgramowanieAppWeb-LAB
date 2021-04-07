import React from "react";
import "./App.css";
import Board from "./Board";
import Cell from "./Cell";

function App() {
  return (
    <div className="App">
      <div className="board-container">
        <Board gameEnd={() => {}} />
      </div>
    </div>
  );
}

export default App;
