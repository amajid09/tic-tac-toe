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

eval("let board = [\n    [ 1, 2, 3 ],\n    [ 4, 5, 6 ],\n    [ 7, 8, 9 ],\n]\nlet turn = \"player 1\"\nlet taken = \"x\";\nfunction run(input){\n        if( !istaken( input ) ){\n            turn = turn == \"player 1\" ? \"player 2\" : \"player 1\" \n            taken = taken == \"x\" ? \"o\" : \"x\"\n            updateBoard(input)\n            renderBoard(input, taken)\n         \n    }\n}\nfunction renderBoard(input, taken) {\n    let items = document.querySelectorAll(\".item\")\n    items.forEach(i => {\n        if (i.classList[1] == input){\n            i.textContent = taken\n        }\n})\n}\nfunction updateBoard(input){\n    let number = parseInt(input);\n    let row = getRow(number)\n    let col = getCol(number, row) \n    board[row][col] = taken\n    console.log(\"updated...\")\n}\nfunction getCol(number, row){\n    return (number-1) - 3*row;\n}\nfunction getRow(number) {\n    return Math.trunc((number-1) / 3);\n}\nfunction istaken( input ) {\n    let number = parseInt(input)\n    let row = getRow(number) \n    let col = getCol(number, row)\n    return board[row][col] == taken;\n}\nasync function startGame(){\n    //listen for click events\n    let item = document.querySelectorAll(\".item\")\n    let input; \n    item.forEach(i => {\n        i.addEventListener(\"click\", function(e) {\n            input = i.classList[1]\n            if(isWinning()) {\n                document.querySelector(\"h1\").textContent = taken.toUpperCase() + \" WON!\"\n                return;\n            } \n            run(input)  \n            console.log(board)       \n        })\n    })\n}\nfunction isWinning(){\n    return right() || top() || middle() || center() || left() || bottom() || diagonal()\n}\nfunction top(){\n    let count = 0;\n    for(let i = 0;i < 3; i++) {\n        if(board[0][i] == taken){\n            count++;\n        }\n    }\n    return count == 3;\n}\n\nfunction center(){\n    let count = 0;\n    for(let i = 0;i < 3; i++) {\n        if(board[1][i] == taken) {\n            count ++;\n        }\n    }\n    return count == 3;\n}\n\nfunction bottom() {\n    let count = 0;\n    for(let i = 0;i< 3; i++) {\n        if(board[2][i] == taken) {\n            count++;\n        }\n    }\n    return count == 3;\n}\nfunction right(){\n    let count = 0; \n    for (let i = 0; i < 3; i++ ){\n        if(board[i][0] == taken) {\n            count ++;\n        }\n    }\n    return count == 3;\n}\n\nfunction middle() {\n    let count = 0;\n    for (let i = 0; i < 3; i++ ){\n        if(board[i][1] == taken) {\n            count++;\n        }\n    }\n    return count == 3;\n}\nfunction left(){\n    let count = 0;\n    for (let i = 0; i < 3; i++ ){\n        if(board[i][2] == taken) {\n            count++;\n        }\n    }\n    return count == 3;\n}\nfunction diagonal() {\n    return ( board[0][0] == taken && board[1][1] == taken && board[2][2] == taken ) ||\n    ( board[2][0] == taken  && board[1][1] == taken && board[0][2] == taken )\n}\nfunction restartGame(){\n    for(let i = 0; i< 3; i++) {\n        for (let j = 0; j < 3; j++){\n            board[i][j] = (i*3) + j+1\n        }\n    }\n    let items = document.querySelectorAll(\".item\");\n    items.forEach(i=> {\n        i.textContent = \"\"\n    })\n    document.querySelector(\"h1\").textContent = \"\"\n}\nstartGame()\ndocument.querySelector(\"button\").addEventListener(\"click\", function(e){\n    restartGame();\n    startGame()\n})\n\n\nfunction removeBorders(){\n    let items = document.querySelectorAll(\".item\")\n    items.forEach(i=> {\n        let lb = [\"4\",\"6\"];\n        let bt = [\"2\", \"8\"]\n       if( lb.indexOf(i.classList[1]) > -1 ) {\n            i.style = \"border-left:none;border-right:none\"\n       } \n       else if(bt.indexOf(i.classList[1]) > -1 ) {\n            i.style = \"border-bottom:none;border-top:none\"\n       }\n       else if(i.classList[1] != 5){\n            i.style = \"border:none;\"\n       }\n\n    })\n}\nremoveBorders()\n\n//# sourceURL=webpack://tic-tac/./index.js?");

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