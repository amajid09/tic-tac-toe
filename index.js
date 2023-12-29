let board = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
]
let turn = "player 1"
let taken = "x";
function run(input){
        if( !istaken( input ) ){
            turn = turn == "player 1" ? "player 2" : "player 1" 
            taken = taken == "x" ? "o" : "x"
            updateBoard(input)
            renderBoard(input, taken)
         
    }
}
function renderBoard(input, taken) {
    let items = document.querySelectorAll(".item")
    items.forEach(i => {
        if (i.classList[1] == input){
            i.textContent = taken
        }
})
}
function updateBoard(input){
    let number = parseInt(input);
    let row = getRow(number)
    let col = getCol(number, row) 
    board[row][col] = taken
    console.log("updated...")
}
function getCol(number, row){
    return (number-1) - 3*row;
}
function getRow(number) {
    return Math.trunc((number-1) / 3);
}
function istaken( input ) {
    let number = parseInt(input)
    let row = getRow(number) 
    let col = getCol(number, row)
    return board[row][col] == taken;
}
async function startGame(){
    //listen for click events
    let item = document.querySelectorAll(".item")
    let input; 
    item.forEach(i => {
        i.addEventListener("click", function(e) {
            input = i.classList[1]
            if(isWinning()) {
                document.querySelector("h1").textContent = taken.toUpperCase() + " WON!"
                return;
            } 
            run(input)  
            console.log(board)       
        })
    })
}
function isWinning(){
    return right() || top() || middle() || center() || left() || bottom() || diagonal()
}
function top(){
    let count = 0;
    for(let i = 0;i < 3; i++) {
        if(board[0][i] == taken){
            count++;
        }
    }
    return count == 3;
}

function center(){
    let count = 0;
    for(let i = 0;i < 3; i++) {
        if(board[1][i] == taken) {
            count ++;
        }
    }
    return count == 3;
}

function bottom() {
    let count = 0;
    for(let i = 0;i< 3; i++) {
        if(board[2][i] == taken) {
            count++;
        }
    }
    return count == 3;
}
function right(){
    let count = 0; 
    for (let i = 0; i < 3; i++ ){
        if(board[i][0] == taken) {
            count ++;
        }
    }
    return count == 3;
}

function middle() {
    let count = 0;
    for (let i = 0; i < 3; i++ ){
        if(board[i][1] == taken) {
            count++;
        }
    }
    return count == 3;
}
function left(){
    let count = 0;
    for (let i = 0; i < 3; i++ ){
        if(board[i][2] == taken) {
            count++;
        }
    }
    return count == 3;
}
function diagonal() {
    return ( board[0][0] == taken && board[1][1] == taken && board[2][2] == taken ) ||
    ( board[2][0] == taken  && board[1][1] == taken && board[0][2] == taken )
}
function restartGame(){
    for(let i = 0; i< 3; i++) {
        for (let j = 0; j < 3; j++){
            board[i][j] = (i*3) + j+1
        }
    }
    let items = document.querySelectorAll(".item");
    items.forEach(i=> {
        i.textContent = ""
    })
    document.querySelector("h1").textContent = ""
}
startGame()
document.querySelector("button").addEventListener("click", function(e){
    restartGame();
    startGame()
})


function removeBorders(){
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
removeBorders()