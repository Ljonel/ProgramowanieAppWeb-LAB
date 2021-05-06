import Cell from "./Cell";

class Board {
  cells: Cell[];
  board: HTMLElement;
  div: HTMLElement;
  currentTurn: string = "O";
  moveCounter: number;

  WIN_COMBINATION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 5],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  constructor(size: number) {
    this.cells = new Array(size);
    this.board = document.querySelector(".board");
    // this.title = document.querySelector(".title");
    this.div = document.querySelector(".title");
    this.moveCounter = 0;
    this.init(size);
  }

  init(size: number): void {
    const cellsSize = size * size;
    const board = document.querySelector(".board");
    console.log(board);

    for (let i = 0; i < cellsSize; i++) {
      const square: HTMLElement = document.createElement("div");
      square.classList.add("board-item");
      //   square.setAttribute("id", i);
      //   square.innerHTML = `${i}`;
      let cellElement = new Cell(square);

      cellElement.htmlElement.addEventListener("click", (e) =>
        this.makeMove(e)
      );
      this.cells[i] = cellElement;
      // console.log(this.board);

      this.board.appendChild(square);
    }
  }

  makeMove(e: EventTarget): void {
    const currentCell = this.cells.filter(
      (item) => item.htmlElement == e.target
    );

    // console.log(currentCell[0].htmlElement.id);

    if (currentCell[0].value == "") {
      currentCell[0].setCellValue(this.currentTurn);
      this.moveCounter++;
      console.log(this.moveCounter);

      if (this.checkWin(parseInt(currentCell[0].htmlElement.id)) == true) {
        this.clearBoard();
      } else {
        console.log("runda trwa");
      }
      this.changeTurn();
    }
  }

  changeTurn(): void {
    if (this.currentTurn === "O") {
      this.currentTurn = "X";
    } else this.currentTurn = "O";

    // console.log(this.currentTurn);
  }

  checkWin(id: number) {
    if (this.cells[0].value === this.currentTurn) {
      if (
        this.cells[1].value === this.currentTurn &&
        this.cells[2].value === this.currentTurn
      ) {
        console.log(`Wygrał - ${this.currentTurn}`);
        this.div.innerHTML += ` ${this.currentTurn}`;
        return true;
      }
      if (
        this.cells[3].value === this.currentTurn &&
        this.cells[6].value === this.currentTurn
      ) {
        console.log(` Wygrał - ${this.currentTurn}`);
        this.div.innerHTML += ` ${this.currentTurn}`;

        return true;
      }
      if (
        this.cells[4].value === this.currentTurn &&
        this.cells[8].value === this.currentTurn
      ) {
        console.log(`Wygrał -${this.currentTurn}`);
        this.div.innerHTML += ` ${this.currentTurn}`;

        return true;
      }
    } else if (this.cells[8].value === this.currentTurn) {
      if (
        this.cells[2].value === this.currentTurn &&
        this.cells[5].value === this.currentTurn
      ) {
        console.log(`Wygrał - ${this.currentTurn}`);
        this.div.innerHTML += ` ${this.currentTurn}`;

        return true;
      }
      if (
        this.cells[6].value === this.currentTurn &&
        this.cells[7].value === this.currentTurn
      ) {
        console.log(`Wygrał - ${this.currentTurn}`);
        this.div.innerHTML += ` ${this.currentTurn}`;

        return true;
      }
    } else if (this.cells[4].value === this.currentTurn) {
      if (
        this.cells[1].value === this.currentTurn &&
        this.cells[7].value === this.currentTurn
      ) {
        console.log(`Wygrał - ${this.currentTurn}`);
        this.div.innerHTML += ` ${this.currentTurn}`;
        return true;
      }
      if (
        this.cells[3].value === this.currentTurn &&
        this.cells[5].value === this.currentTurn
      ) {
        console.log(`Wygrał - ${this.currentTurn}`);
        this.div.innerHTML += ` ${this.currentTurn}`;
        return true;
      }
    } else {
      return false;
    }

    if (this.moveCounter == this.cells.length) {
      this.div.innerHTML += ` DRAW`;
      this.clearBoard();
    }
  }

  clearBoard(): void {
    this.moveCounter = 0;
    this.cells.forEach((cell, index) => {
      this.cells[index].value = "";
    });

    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].htmlElement.innerHTML = "";
    }
  }
}
export default Board;
