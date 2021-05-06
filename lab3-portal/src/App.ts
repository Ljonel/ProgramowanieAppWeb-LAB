import * as styles from "./styles/styles.scss";
import { Games } from "./games.enum";
import { Game } from "./game.model";
import { TicTacToe } from "./Tictactoe";
import { BattleShips } from "./Battleships";
// import variables from "./styles/variables.scss";
class App {
  gameFactory: GamesFactory;
  enumLength: number = 0;

  constructor() {
    this.gameFactory = new GamesFactory();
    this.runColors();
    this.initMenu();
  }

  initMenu(): void {
    const menuContainer = <HTMLDivElement>document.createElement("div");
    const list = document.createElement("ul");
    menuContainer.setAttribute("class", "mainContainer");

    for (let element in Games) {
      if (isNaN(Number(element))) {
        this.enumLength++;
        continue;
      }
      const game = this.gameFactory.getGame(Number(element));
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      card.innerHTML = `
          <h3>${game.name}</h3>
      `;
      card.addEventListener("click", () => {
        menuContainer.innerHTML = "";
        menuContainer.appendChild(game.getGameElement());
      });
      menuContainer.appendChild(card);
    }

    for (let i = 1; i <= this.enumLength; i++) {
      const game = document.createElement("li");
      game.innerHTML = Games[i];
      list.appendChild(game);
    }

    document.querySelector("aside").appendChild(list);
    document.querySelector("main").appendChild(menuContainer);
  }

  runColors(): void {
    const colors = document.querySelectorAll(".colors");
    colors.forEach((element) => {
      element.addEventListener("click", () => {
        console.log(element.className.slice(7));
      });
    });
  }
}

class GamesFactory {
  getGame(game: Games): Game {
    switch (game) {
      case Games.TicTacToe:
        return new TicTacToe();
      case Games.BattleShips:
        return new BattleShips();
      default:
        console.warn("Game not found");
        break;
    }
  }
}
// new App(gameFactory);
const a = new App();
