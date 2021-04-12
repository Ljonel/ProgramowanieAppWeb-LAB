import { Games } from "./games.enum";
import { Game } from "./game.model";
import { TicTacToe } from "./Tictactoe";
import { BattleShips } from "./Battleships";
import "./styles/styles.scss";

class App {
  constructor() {
    this.initMenu();
  }

  initMenu(): void {
    const aside = document.querySelector("aside");
    const main = document.querySelector("main");
    const menuContainer = <HTMLDivElement>document.createElement("div"); // kontener menu dostępnych gier
    menuContainer.setAttribute("class", "mainContainer");
    // const gameContainer = <HTMLDivElement>document.createElement("div"); // kontener główny ekranu z grą
    const list = document.createElement("ul"); // lista pozycji w menu dostępnych gier

    // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
    // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
    // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
    // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartoťciach enum'a

    //EnumLength
    let enumLength = 0;
    for (let element in Games) {
      if (isNaN(Number(element))) {
        enumLength++;
      }
    }

    //Show list of games
    for (let i = 1; i <= enumLength; i++) {
      console.log(Games[i]);
      const game = document.createElement("li");
      game.innerHTML = Games[i];
      list.appendChild(game);
    }

    for (let element in Games) {
      if (isNaN(Number(element))) {
        continue;
      }
      const game = gameFactory.getGame(Number(element));
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      card.innerHTML = `
          <h3>${game.name}</h3>
      `;
      card.addEventListener("click", () => {
        console.log(`${game.name}`);
        menuContainer.innerHTML = "";
        menuContainer.appendChild(game.getGameElement());
      });
      menuContainer.appendChild(card);
    }

    // document.body.appendChild(gameContainer);
    main.appendChild(menuContainer);
    aside.appendChild(list);
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
const gameFactory = new GamesFactory();
const a = new App();
