import { Game } from "./game.model";
import Board from "./Board";

export class TicTacToe implements Game {
  name: string;

  constructor() {
    this.name = "Kółko i krzyżyk";
  }
  getGameElement(): HTMLElement {
    const board = document.createElement("div");
    const title = document.createElement("div");
    board.setAttribute("class", "board");
    const mn = document.querySelector(".mainContainer");
    mn.style.display = "flex";
    document.querySelector(".mainContainer").appendChild(board);
    document.querySelector(".mainContainer").appendChild(title);
    const game = new Board(3);
    return board;
  }
}
