/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar games_enum_1 = __webpack_require__(/*! ./games.enum */ \"./src/games.enum.ts\");\r\nvar Tictactoe_1 = __webpack_require__(/*! ./Tictactoe */ \"./src/Tictactoe.ts\");\r\nvar Battleships_1 = __webpack_require__(/*! ./Battleships */ \"./src/Battleships.ts\");\r\n__webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        this.initMenu();\r\n    }\r\n    App.prototype.initMenu = function () {\r\n        var aside = document.querySelector(\"aside\");\r\n        var main = document.querySelector(\"main\");\r\n        var menuContainer = document.createElement(\"div\"); // kontener menu dostępnych gier\r\n        menuContainer.setAttribute(\"class\", \"mainContainer\");\r\n        // const gameContainer = <HTMLDivElement>document.createElement(\"div\"); // kontener główny ekranu z grą\r\n        var list = document.createElement(\"ul\"); // lista pozycji w menu dostępnych gier\r\n        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum\r\n        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą\r\n        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.\r\n        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartoťciach enum'a\r\n        //EnumLength\r\n        var enumLength = 0;\r\n        for (var element in games_enum_1.Games) {\r\n            if (isNaN(Number(element))) {\r\n                enumLength++;\r\n            }\r\n        }\r\n        //Show list of games\r\n        for (var i = 1; i <= enumLength; i++) {\r\n            console.log(games_enum_1.Games[i]);\r\n            var game = document.createElement(\"li\");\r\n            game.innerHTML = games_enum_1.Games[i];\r\n            list.appendChild(game);\r\n        }\r\n        var _loop_1 = function (element) {\r\n            if (isNaN(Number(element))) {\r\n                return \"continue\";\r\n            }\r\n            var game = gameFactory.getGame(Number(element));\r\n            var card = document.createElement(\"div\");\r\n            card.setAttribute(\"class\", \"card\");\r\n            card.innerHTML = \"\\n          <h3>\" + game.name + \"</h3>\\n      \";\r\n            card.addEventListener(\"click\", function () {\r\n                console.log(\"\" + game.name);\r\n                menuContainer.innerHTML = \"\";\r\n                menuContainer.appendChild(game.getGameElement());\r\n            });\r\n            menuContainer.appendChild(card);\r\n        };\r\n        for (var element in games_enum_1.Games) {\r\n            _loop_1(element);\r\n        }\r\n        // document.body.appendChild(gameContainer);\r\n        main.appendChild(menuContainer);\r\n        aside.appendChild(list);\r\n    };\r\n    return App;\r\n}());\r\nvar GamesFactory = /** @class */ (function () {\r\n    function GamesFactory() {\r\n    }\r\n    GamesFactory.prototype.getGame = function (game) {\r\n        switch (game) {\r\n            case games_enum_1.Games.TicTacToe:\r\n                return new Tictactoe_1.TicTacToe();\r\n            case games_enum_1.Games.BattleShips:\r\n                return new Battleships_1.BattleShips();\r\n            default:\r\n                console.warn(\"Game not found\");\r\n                break;\r\n        }\r\n    };\r\n    return GamesFactory;\r\n}());\r\n// new App(gameFactory);\r\nvar gameFactory = new GamesFactory();\r\nvar a = new App();\r\n\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/Battleships.ts":
/*!****************************!*\
  !*** ./src/Battleships.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.BattleShips = void 0;\r\nvar BattleShips = /** @class */ (function () {\r\n    function BattleShips() {\r\n        this.name = \"Statki\";\r\n    }\r\n    BattleShips.prototype.getGameElement = function () {\r\n        var div = document.createElement(\"div\");\r\n        div.appendChild(document.createTextNode(\"Hello BattleShips\"));\r\n        return div;\r\n    };\r\n    return BattleShips;\r\n}());\r\nexports.BattleShips = BattleShips;\r\n\n\n//# sourceURL=webpack:///./src/Battleships.ts?");

/***/ }),

/***/ "./src/Tictactoe.ts":
/*!**************************!*\
  !*** ./src/Tictactoe.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.TicTacToe = void 0;\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.name = \"Kółko i krzyżyk\";\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        var div = document.createElement(\"div\");\r\n        div.appendChild(document.createTextNode(\"Hello TicTacToe\"));\r\n        return div;\r\n    };\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack:///./src/Tictactoe.ts?");

/***/ }),

/***/ "./src/games.enum.ts":
/*!***************************!*\
  !*** ./src/games.enum.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.Games = void 0;\r\nvar Games;\r\n(function (Games) {\r\n    Games[Games[\"TicTacToe\"] = 1] = \"TicTacToe\";\r\n    Games[Games[\"BattleShips\"] = 2] = \"BattleShips\";\r\n})(Games = exports.Games || (exports.Games = {}));\r\n\n\n//# sourceURL=webpack:///./src/games.enum.ts?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./src/styles/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/App.ts");
/******/ 	
/******/ })()
;