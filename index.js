

const Player = (sign) => {
    let _sign = sign;
    const getSign = () => _sign;
    const setSign = (sign) => _sign=sign;
    return {getSign, setSign}
}

const GameBoard = (sign) => {
    let _sign = sign;
    let board = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
 ];
    const isWinning = () => right() || top() || middle() || center() || left() || bottom() || diagonal();
    
    const top = () =>{
        let count = 0;
        for(let i = 0;i < 3; i++) {
            if(board[0][i] == _sign){
                count++;
            }
        }
        return count == 3;
    };

    const center =() => {
        let count = 0;
        for(let i = 0;i < 3; i++) {
            if(board[1][i] == _sign) {
                count ++;
            }
        }
        return count == 3;
    }

    const bottom = () => {
        let count = 0;
        for(let i = 0;i< 3; i++) {
            if(board[2][i] == _sign) {
                count++;
            }
        }
        return count == 3;
    }

    const right = () => {
        let count = 0; 
        for (let i = 0; i < 3; i++ ){
            if(board[i][0] == _sign) {
                count ++;
            }
        }
        return count == 3;
    }

    const middle = () => {
        let count = 0;
        for (let i = 0; i < 3; i++ ){
            if(board[i][1] == _sign) {
                count++;
            }
        }
        return count == 3;
    }

    const left = () => {
        let count = 0;
        for (let i = 0; i < 3; i++ ){
            if(board[i][2] == _sign) {
                count++;
            }
        }
        return count == 3;
    }

    const diagonal = () => {
        return ( board[0][0] == _sign && board[1][1] == _sign && board[2][2] == _sign ) ||
        ( board[2][0] == _sign  && board[1][1] == _sign && board[0][2] == _sign );
    }


    const getBoard = () => board;

    const setBoard =(i, j, value) => board[i][j] = value;

    const resetBoard = () => {
        for(let i = 0; i< 3; i++) {
            for (let j = 0; j < 3; j++){
                board[i][j] = (i*3) + j+1;
            }
        }
        let items = document.querySelectorAll(".item");
        items.forEach(i=> {
            i.textContent = "";
        })
        document.querySelector("h1").textContent = "";
    }
    
    return {getBoard, setBoard, resetBoard, isWinning };
}


const Game = (player, input) => {

    let _player = player;
    let _input = input; 
    let board = GameBoard(_player.getSign());

    const setPlayer = () => _player.getSign() == "x" ? 
    _player.setSign("o") : _player.setSign("x");

    const setInput = (input) => _input = input;

    const  getCol = (number, row) => (number-1) - 3*row;

    const getRow = (number) =>  Math.trunc((number-1) / 3);
 
    const getPlayer = () => player; 
  
    const updateBoard = () => {
        let number = parseInt(_input);
        let row = getRow(number);
        let col = getCol(number, row);
        console.log("row " + row + "\ncolumn " + col) 
        board.setBoard(row, col, _player.getSign());
    }
    
    const renderBoard = () => {
        let items = document.querySelectorAll(".item");
        console.log("input " + _input)
        items.forEach(i => {
            if (i.classList[1] == _input){
                i.textContent = _player.getSign() ;
            }
        })
    }
 
    const isTaken = () => {
        let number = parseInt(_input);
        let row = getRow(number);
        let col = getCol(number, row);
        console.log(_input)
        console.log(board.getBoard()[row][col])
        return ["x", "o"].indexOf(board.getBoard()[row][col]) > -1;
    }
  
    const isWinning = () => board.isWinning()
   
    const isDraw = () => {
        let count = 0; 
        for(let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(["x", "o"].indexOf(board.getBoard()[i][j]) > -1){
                    count++;
                }
            }
        }
        return count == 9;
    };

    const resetBoard = () => board.resetBoard();
    
    return {updateBoard,resetBoard, isDraw, renderBoard, setPlayer, setInput, isTaken, isWinning};
}

const Main = () => {
    const player = Player("x");
    const game =  Game(player, -1);
    const run = () => {
        game.updateBoard();
        game.renderBoard();

    }
    
    const startGame = () => {
        let item = document.querySelectorAll(".item");
        let input; 
        item.forEach(i => {
            i.addEventListener("click", function(e) {
                input = i.classList[1]
                game.setInput(input)
                if(!game.isTaken()){
                    run()
                    game.setPlayer()
                }
                if(game.isWinning()) {
                    let won = player.getSign() == "x" ? "o" : "x"; 
                    document.querySelector("h1").textContent = won.toUpperCase() + " WON!"
                    return;
                }
                if(game.isDraw()) {
                    document.querySelector("h1").textContent = "DRAW!"
                    return;
                }
            })
        })
    }
    
    const restartGame = () => {
        document.querySelector("button").addEventListener("click", function(e){
            game.resetBoard();
            startGame()
        })
    }
    
    
    const removeBoarders = () => {
        let items = document.querySelectorAll(".item")
        items.forEach(i=> {
            let lb = ["4","6"];
            let bt = ["2", "8"]
        if( lb.indexOf(i.classList[1]) > -1 ) {
            i.style = "border-left:none;border-right:none"
        } 
        else if(bt.indexOf(i.classList[1]) > -1 ) {
            i.style = "border-bottom:none;border-top:none"
        }
        else if(i.classList[1] != 5){
            i.style = "border:none;"
        }
        })
    }
    
    return {removeBoarders,startGame, restartGame}
};


let main = Main()
main.removeBoarders()
main.startGame()
main.restartGame();



