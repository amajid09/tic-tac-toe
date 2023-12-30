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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("\n\nconst Player = (sign) => {\n    let _sign = sign;\n    const getSign = () => _sign;\n    const setSign = (sign) => _sign=sign;\n    return {getSign, setSign}\n}\n\nconst GameBoard = (sign) => {\n    let _sign = sign;\n    let board = [\n    [ 1, 2, 3 ],\n    [ 4, 5, 6 ],\n    [ 7, 8, 9 ],\n ];\n    const isWinning = () => right() || top() || middle() || center() || left() || bottom() || diagonal();\n    \n    const top = () =>{\n        let count = 0;\n        for(let i = 0;i < 3; i++) {\n            if(board[0][i] == _sign){\n                count++;\n            }\n        }\n        return count == 3;\n    };\n\n    const center =() => {\n        let count = 0;\n        for(let i = 0;i < 3; i++) {\n            if(board[1][i] == _sign) {\n                count ++;\n            }\n        }\n        return count == 3;\n    }\n\n    const bottom = () => {\n        let count = 0;\n        for(let i = 0;i< 3; i++) {\n            if(board[2][i] == _sign) {\n                count++;\n            }\n        }\n        return count == 3;\n    }\n    const right = () => {\n        let count = 0; \n        for (let i = 0; i < 3; i++ ){\n            if(board[i][0] == _sign) {\n                count ++;\n            }\n        }\n        return count == 3;\n    }\n\n    const middle = () => {\n        let count = 0;\n        for (let i = 0; i < 3; i++ ){\n            if(board[i][1] == _sign) {\n                count++;\n            }\n        }\n        return count == 3;\n    }\n    const left = () => {\n        let count = 0;\n        for (let i = 0; i < 3; i++ ){\n            if(board[i][2] == _sign) {\n                count++;\n            }\n        }\n        return count == 3;\n    }\n    const diagonal = () => {\n        return ( board[0][0] == _sign && board[1][1] == _sign && board[2][2] == _sign ) ||\n        ( board[2][0] == _sign  && board[1][1] == _sign && board[0][2] == _sign );\n    }\n\n\n    const getBoard = () => board;\n    const setBoard =(i, j, value) => board[i][j] = value;\n    const resetBoard = () => {\n        for(let i = 0; i< 3; i++) {\n            for (let j = 0; j < 3; j++){\n                board[i][j] = (i*3) + j+1;\n            }\n        }\n        let items = document.querySelectorAll(\".item\");\n        items.forEach(i=> {\n            i.textContent = \"\";\n        })\n        document.querySelector(\"h1\").textContent = \"\";\n    }\n    \n    return {getBoard, setBoard, resetBoard, isWinning };\n}\n\n\nconst Game = (player, input) => {\n    let _player = player;\n    let _input = input; \n    let board = GameBoard(_player.getSign());\n    const setPlayer = () => _player.getSign() == \"x\" ? \n    _player.setSign(\"o\") : _player.setSign(\"x\");\n;\n    const setInput = (input) => _input = input;\n    const  getCol = (number, row) => (number-1) - 3*row;\n    const getRow = (number) =>  Math.trunc((number-1) / 3);\n    const getPlayer = () => player; \n    const updateBoard = () => {\n        let number = parseInt(_input);\n        let row = getRow(number);\n        let col = getCol(number, row);\n        console.log(\"row \" + row + \"\\ncolumn \" + col) \n        board.setBoard(row, col, _player.getSign());\n    }\n    \n    const renderBoard = () => {\n        let items = document.querySelectorAll(\".item\");\n        console.log(\"input \" + _input)\n        items.forEach(i => {\n            if (i.classList[1] == _input){\n                i.textContent = _player.getSign() ;\n            }\n        })\n    }\n    const isTaken = () => {\n        let number = parseInt(_input);\n        let row = getRow(number);\n        let col = getCol(number, row);\n        console.log(_input)\n        console.log(board.getBoard()[row][col])\n        return [\"x\", \"o\"].indexOf(board.getBoard()[row][col]) > -1;\n    }\n    const isWinning = () => board.isWinning()\n    const isDraw = () => {\n        let count = 0; \n        for(let i = 0; i < 3; i++) {\n            for (let j = 0; j < 3; j++) {\n                if([\"x\", \"o\"].indexOf(board.getBoard()[i][j]) > -1){\n                    count++;\n                }\n            }\n        }\n        return count == 9;\n    };\n\n    const resetBoard = () => board.resetBoard();\n    return {updateBoard,resetBoard, isDraw, renderBoard, setPlayer, setInput, isTaken, isWinning};\n}\nconst Main = () => {\n    const player = Player(\"x\");\n    const game =  Game(player, -1);\n    const run = () => {\n            game.updateBoard();\n            game.renderBoard();\n\n    }\n    const startGame = () => {\n        let item = document.querySelectorAll(\".item\");\n        let input; \n        item.forEach(i => {\n            i.addEventListener(\"click\", function(e) {\n                input = i.classList[1]\n                game.setInput(input)\n                if(!game.isTaken()){\n                    run()\n                    game.setPlayer()\n                }\n                if(game.isWinning()) {\n                    let won = player.getSign() == \"x\" ? \"o\" : \"x\"; \n                    document.querySelector(\"h1\").textContent = won.toUpperCase() + \" WON!\"\n                    return;\n                }\n                if(game.isDraw()) {\n                    document.querySelector(\"h1\").textContent = \"DRAW!\"\n                    return;\n                }\n            })\n        })\n    }\n    const restartGame = () => {\n        document.querySelector(\"button\").addEventListener(\"click\", function(e){\n            game.resetBoard();\n            startGame()\n        })\n    }\n    const removeBoarders = () => {\n        let items = document.querySelectorAll(\".item\")\n        items.forEach(i=> {\n            let lb = [\"4\",\"6\"];\n            let bt = [\"2\", \"8\"]\n        if( lb.indexOf(i.classList[1]) > -1 ) {\n                i.style = \"border-left:none;border-right:none\"\n        } \n        else if(bt.indexOf(i.classList[1]) > -1 ) {\n                i.style = \"border-bottom:none;border-top:none\"\n        }\n        else if(i.classList[1] != 5){\n                i.style = \"border:none;\"\n        }\n\n        })\n    }\n    return {removeBoarders,startGame, restartGame}\n};\n\n\nlet main = Main()\nmain.removeBoarders()\nmain.startGame()\nmain.restartGame();\n\n\n\n\n\n//# sourceURL=webpack://tic-tac/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;