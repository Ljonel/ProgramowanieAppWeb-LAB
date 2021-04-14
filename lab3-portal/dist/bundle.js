/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\n// import \"./styles/styles.scss\";\r\nvar games_enum_1 = __webpack_require__(/*! ./games.enum */ \"./src/games.enum.ts\");\r\nvar Tictactoe_1 = __webpack_require__(/*! ./Tictactoe */ \"./src/Tictactoe.ts\");\r\nvar Battleships_1 = __webpack_require__(/*! ./Battleships */ \"./src/Battleships.ts\");\r\n// import variables from \"./styles/variables.scss\";\r\nvar App = /** @class */ (function () {\r\n    function App() {\r\n        this.enumLength = 0;\r\n        this.gameFactory = new GamesFactory();\r\n        this.runColors();\r\n        this.initMenu();\r\n    }\r\n    App.prototype.initMenu = function () {\r\n        var menuContainer = document.createElement(\"div\");\r\n        var list = document.createElement(\"ul\");\r\n        menuContainer.setAttribute(\"class\", \"mainContainer\");\r\n        var _loop_1 = function (element) {\r\n            if (isNaN(Number(element))) {\r\n                this_1.enumLength++;\r\n                return \"continue\";\r\n            }\r\n            var game = this_1.gameFactory.getGame(Number(element));\r\n            var card = document.createElement(\"div\");\r\n            card.setAttribute(\"class\", \"card\");\r\n            card.innerHTML = \"\\n          <h3>\" + game.name + \"</h3>\\n      \";\r\n            card.addEventListener(\"click\", function () {\r\n                menuContainer.innerHTML = \"\";\r\n                menuContainer.appendChild(game.getGameElement());\r\n            });\r\n            menuContainer.appendChild(card);\r\n        };\r\n        var this_1 = this;\r\n        for (var element in games_enum_1.Games) {\r\n            _loop_1(element);\r\n        }\r\n        for (var i = 1; i <= this.enumLength; i++) {\r\n            var game = document.createElement(\"li\");\r\n            game.innerHTML = games_enum_1.Games[i];\r\n            list.appendChild(game);\r\n        }\r\n        document.querySelector(\"aside\").appendChild(list);\r\n        document.querySelector(\"main\").appendChild(menuContainer);\r\n    };\r\n    App.prototype.runColors = function () {\r\n        var colors = document.querySelectorAll(\".colors\");\r\n        colors.forEach(function (element) {\r\n            element.addEventListener(\"click\", function () {\r\n                console.log(element.className.slice(7));\r\n                console.log(variables);\r\n            });\r\n        });\r\n    };\r\n    return App;\r\n}());\r\nvar GamesFactory = /** @class */ (function () {\r\n    function GamesFactory() {\r\n    }\r\n    GamesFactory.prototype.getGame = function (game) {\r\n        switch (game) {\r\n            case games_enum_1.Games.TicTacToe:\r\n                return new Tictactoe_1.TicTacToe();\r\n            case games_enum_1.Games.BattleShips:\r\n                return new Battleships_1.BattleShips();\r\n            default:\r\n                console.warn(\"Game not found\");\r\n                break;\r\n        }\r\n    };\r\n    return GamesFactory;\r\n}());\r\n// new App(gameFactory);\r\nvar a = new App();\r\n\n\n//# sourceURL=webpack://lab3-portal/./src/App.ts?");

/***/ }),

/***/ "./src/Battleships.ts":
/*!****************************!*\
  !*** ./src/Battleships.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.BattleShips = void 0;\r\nvar BattleShips = /** @class */ (function () {\r\n    function BattleShips() {\r\n        this.name = \"Statki\";\r\n    }\r\n    BattleShips.prototype.getGameElement = function () {\r\n        var div = document.createElement(\"div\");\r\n        div.appendChild(document.createTextNode(\"Hello BattleShips\"));\r\n        return div;\r\n    };\r\n    return BattleShips;\r\n}());\r\nexports.BattleShips = BattleShips;\r\n\n\n//# sourceURL=webpack://lab3-portal/./src/Battleships.ts?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./src/Cell.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board(size) {\r\n        this.currentTurn = \"O\";\r\n        this.WIN_COMBINATION = [\r\n            [0, 1, 2],\r\n            [3, 4, 5],\r\n            [6, 7, 8],\r\n            [0, 3, 5],\r\n            [1, 4, 7],\r\n            [2, 5, 8],\r\n            [0, 4, 8],\r\n            [2, 4, 6],\r\n        ];\r\n        this.cells = new Array(size);\r\n        this.board = document.querySelector(\".board\");\r\n        // this.title = document.querySelector(\".title\");\r\n        this.div = document.querySelector(\".title\");\r\n        this.moveCounter = 0;\r\n        this.init(size);\r\n    }\r\n    Board.prototype.init = function (size) {\r\n        var _this = this;\r\n        var cellsSize = size * size;\r\n        var board = document.querySelector(\".board\");\r\n        console.log(board);\r\n        for (var i = 0; i < cellsSize; i++) {\r\n            var square = document.createElement(\"div\");\r\n            square.classList.add(\"board-item\");\r\n            //   square.setAttribute(\"id\", i);\r\n            //   square.innerHTML = `${i}`;\r\n            var cellElement = new Cell_1[\"default\"](square);\r\n            cellElement.htmlElement.addEventListener(\"click\", function (e) {\r\n                return _this.makeMove(e);\r\n            });\r\n            this.cells[i] = cellElement;\r\n            // console.log(this.board);\r\n            this.board.appendChild(square);\r\n        }\r\n    };\r\n    Board.prototype.makeMove = function (e) {\r\n        var currentCell = this.cells.filter(function (item) { return item.htmlElement == e.target; });\r\n        // console.log(currentCell[0].htmlElement.id);\r\n        if (currentCell[0].value == \"\") {\r\n            currentCell[0].setCellValue(this.currentTurn);\r\n            this.moveCounter++;\r\n            console.log(this.moveCounter);\r\n            if (this.checkWin(parseInt(currentCell[0].htmlElement.id)) == true) {\r\n                this.clearBoard();\r\n            }\r\n            else {\r\n                console.log(\"runda trwa\");\r\n            }\r\n            this.changeTurn();\r\n        }\r\n    };\r\n    Board.prototype.changeTurn = function () {\r\n        if (this.currentTurn === \"O\") {\r\n            this.currentTurn = \"X\";\r\n        }\r\n        else\r\n            this.currentTurn = \"O\";\r\n        // console.log(this.currentTurn);\r\n    };\r\n    Board.prototype.checkWin = function (id) {\r\n        if (this.cells[0].value === this.currentTurn) {\r\n            if (this.cells[1].value === this.currentTurn &&\r\n                this.cells[2].value === this.currentTurn) {\r\n                console.log(\"Wygra\\u0142 - \" + this.currentTurn);\r\n                this.div.innerHTML += \" \" + this.currentTurn;\r\n                return true;\r\n            }\r\n            if (this.cells[3].value === this.currentTurn &&\r\n                this.cells[6].value === this.currentTurn) {\r\n                console.log(\" Wygra\\u0142 - \" + this.currentTurn);\r\n                this.div.innerHTML += \" \" + this.currentTurn;\r\n                return true;\r\n            }\r\n            if (this.cells[4].value === this.currentTurn &&\r\n                this.cells[8].value === this.currentTurn) {\r\n                console.log(\"Wygra\\u0142 -\" + this.currentTurn);\r\n                this.div.innerHTML += \" \" + this.currentTurn;\r\n                return true;\r\n            }\r\n        }\r\n        else if (this.cells[8].value === this.currentTurn) {\r\n            if (this.cells[2].value === this.currentTurn &&\r\n                this.cells[5].value === this.currentTurn) {\r\n                console.log(\"Wygra\\u0142 - \" + this.currentTurn);\r\n                this.div.innerHTML += \" \" + this.currentTurn;\r\n                return true;\r\n            }\r\n            if (this.cells[6].value === this.currentTurn &&\r\n                this.cells[7].value === this.currentTurn) {\r\n                console.log(\"Wygra\\u0142 - \" + this.currentTurn);\r\n                this.div.innerHTML += \" \" + this.currentTurn;\r\n                return true;\r\n            }\r\n        }\r\n        else if (this.cells[4].value === this.currentTurn) {\r\n            if (this.cells[1].value === this.currentTurn &&\r\n                this.cells[7].value === this.currentTurn) {\r\n                console.log(\"Wygra\\u0142 - \" + this.currentTurn);\r\n                this.div.innerHTML += \" \" + this.currentTurn;\r\n                return true;\r\n            }\r\n            if (this.cells[3].value === this.currentTurn &&\r\n                this.cells[5].value === this.currentTurn) {\r\n                console.log(\"Wygra\\u0142 - \" + this.currentTurn);\r\n                this.div.innerHTML += \" \" + this.currentTurn;\r\n                return true;\r\n            }\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n        if (this.moveCounter == this.cells.length) {\r\n            this.div.innerHTML += \" DRAW\";\r\n            this.clearBoard();\r\n        }\r\n    };\r\n    Board.prototype.clearBoard = function () {\r\n        var _this = this;\r\n        this.moveCounter = 0;\r\n        this.cells.forEach(function (cell, index) {\r\n            _this.cells[index].value = \"\";\r\n        });\r\n        for (var i = 0; i < this.cells.length; i++) {\r\n            this.cells[i].htmlElement.innerHTML = \"\";\r\n        }\r\n    };\r\n    return Board;\r\n}());\r\nexports.default = Board;\r\n\n\n//# sourceURL=webpack://lab3-portal/./src/Board.ts?");

/***/ }),

/***/ "./src/Cell.ts":
/*!*********************!*\
  !*** ./src/Cell.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(cell) {\r\n        //   cellValue: number;\r\n        this.value = \"\";\r\n        this.htmlElement = cell;\r\n    }\r\n    Cell.prototype.setCellValue = function (value) {\r\n        // TODO: napisz samemu metodę, która ustawia w\r\n        // tabeli kółko i krzyżyk. Możesz przyjąć, że kółko\r\n        // to wartość -1, krzyżyk to wartość 1, a 0 (zero)\r\n        // oznacza pole nieustawione.\r\n        // if (this.value === \"\") {\r\n        this.value = value;\r\n        this.htmlElement.innerHTML = this.value;\r\n        // }\r\n    };\r\n    return Cell;\r\n}());\r\nexports.default = Cell;\r\n\n\n//# sourceURL=webpack://lab3-portal/./src/Cell.ts?");

/***/ }),

/***/ "./src/Tictactoe.ts":
/*!**************************!*\
  !*** ./src/Tictactoe.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.TicTacToe = void 0;\r\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.name = \"Kółko i krzyżyk\";\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        var board = document.createElement(\"div\");\r\n        var title = document.createElement(\"div\");\r\n        board.setAttribute(\"class\", \"board\");\r\n        var mn = document.querySelector(\".mainContainer\");\r\n        mn.style.display = \"flex\";\r\n        document.querySelector(\".mainContainer\").appendChild(board);\r\n        document.querySelector(\".mainContainer\").appendChild(title);\r\n        var game = new Board_1[\"default\"](3);\r\n        return board;\r\n    };\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack://lab3-portal/./src/Tictactoe.ts?");

/***/ }),

/***/ "./src/games.enum.ts":
/*!***************************!*\
  !*** ./src/games.enum.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.Games = void 0;\r\nvar Games;\r\n(function (Games) {\r\n    Games[Games[\"TicTacToe\"] = 1] = \"TicTacToe\";\r\n    Games[Games[\"BattleShips\"] = 2] = \"BattleShips\";\r\n})(Games = exports.Games || (exports.Games = {}));\r\n\n\n//# sourceURL=webpack://lab3-portal/./src/games.enum.ts?");

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