/*Constants*/
PLAYER_ONE = 1;
PLAYER_TWO = -1;
GAME_TIE = 2;


/*Variables*/
let gameState;
let playerTurn;
let boardState;


/*Cashed Elements*/
const titleText = document.querySelector('h2');
const reset = document.getElementById('replay');
const tile1 = document.getElementById('b1');
const tile2 = document.getElementById('b2');
const tile3 = document.getElementById('b3');
const tile4 = document.getElementById('b4');
const tile5 = document.getElementById('b5');
const tile6 = document.getElementById('b6');
const tile7 = document.getElementById('b7');
const tile8 = document.getElementById('b8');
const tile9 = document.getElementById('b9');


/*Event Listeners*/
document.querySelector('#b1').addEventListener('click', pressB1);
document.querySelector('#b2').addEventListener('click', pressB2);
document.querySelector('#b3').addEventListener('click', pressB3);
document.querySelector('#b4').addEventListener('click', pressB4);
document.querySelector('#b5').addEventListener('click', pressB5);
document.querySelector('#b6').addEventListener('click', pressB6);
document.querySelector('#b7').addEventListener('click', pressB7);
document.querySelector('#b8').addEventListener('click', pressB8);
document.querySelector('#b9').addEventListener('click', pressB9);
document.querySelector('#replay').addEventListener('click', resetGame)



/*Functions*/
initialize();

function handleBoard() {
  checkWinConditions();
  playerTurn *= -1;
  renderText();
}
function checkWinConditions() {
  checkVertWin();
  checkHoriWin();
  checkDiagWin();
  checkIfBoardFull();
  if (gameState === 0) {
    return null;
  }

  function checkVertWin() {
    if (boardState[0][0] + boardState[1][0] + boardState[2][0] === 3 || boardState[0][1] + boardState[1][1] + boardState[2][1] === 3 || boardState[0][2] + boardState[1][2] + boardState[2][2] === 3) {
      gameState = PLAYER_ONE;
    } else if (boardState[0][0] + boardState[1][0] + boardState[2][0] === -3 || boardState[0][1] + boardState[1][1] + boardState[2][1] === -3 || boardState[0][2] + boardState[1][2] + boardState[2][2] === -3){
      gameState = PLAYER_TWO;
    }
  }

  function checkHoriWin() {
    if (boardState[0][0] + boardState[0][1] + boardState[0][2] === 3 || boardState[1][0] + boardState[1][1] + boardState[1][2] === 3 || boardState[2][0] + boardState[2][1] + boardState[2][2] === 3) {
      gameState = PLAYER_ONE;
    } else if (boardState[0][0] + boardState[0][1] + boardState[0][2] === -3 || boardState[1][0] + boardState[1][1] + boardState[1][2] === -3 || boardState[2][0] + boardState[2][1] + boardState[2][2] === -3){
      gameState = PLAYER_TWO;
    }
  }

  function checkDiagWin() {
    if (boardState[0][0] + boardState[1][1] + boardState[2][2] === 3 || boardState[2][0] + boardState[1][1] + boardState[0][2] === 3)  {
      gameState = PLAYER_ONE;
    } else if (boardState[0][0] + boardState[1][1] + boardState[2][2] === -3 || boardState[2][0] + boardState[1][1] + boardState[0][2] === -3){
      gameState = PLAYER_TWO;
    }
  }

  function checkIfBoardFull() {
    if (boardState[0][0] !== 0 && boardState[0][1] !== 0 && boardState[0][2] !== 0 && boardState[1][0] !== 0 && boardState[1][1] !== 0 && boardState[1][2] !== 0 && boardState[2][0] !== 0 && boardState[2][1] !== 0 && boardState[2][2] !== 0){ gameState = GAME_TIE; }
  }
}
function renderText() {
  if (gameState === 1 ) {
    titleText.innerHTML = "Player 1's Win";
  } else if (gameState === -1 ) {
    titleText.innerHTML = "Player 2's Win";
  } else if (gameState === 2 ) {
    titleText.innerHTML = "It's a Tie";
  } else {
      if (playerTurn === 1){
      titleText.innerHTML = "Player 1's Turn";
    } else {
      titleText.innerHTML = "Player 2's Turn";
    }  
  } 
}
function initialize () {
  boardState = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  playerTurn = 1;
  gameState = 0;
  renderText();
}
function resetGame () {
  initialize();
  resetButtons();
}
function resetButtons(){
  tile1.className = "";
  tile1.innerText = '';
  tile1.disabled = false;

  tile2.className = "";
  tile2.innerText = '';
  tile2.disabled = false;

  tile3.className = "";
  tile3.innerText = '';
  tile3.disabled = false;

  tile4.className = "";
  tile4.innerText = '';
  tile4.disabled = false;

  tile5.className = "";
  tile5.innerText = '';
  tile5.disabled = false;

  tile6.className = "";
  tile6.innerText = '';
  tile6.disabled = false;

  tile7.className = "";
  tile7.innerText = '';
  tile7.disabled = false;

  tile8.className = "";
  tile8.innerText = '';
  tile8.disabled = false;

  tile9.className = "";
  tile9.innerText = '';
  tile9.disabled = false;
}
function pressB1 (){
  if (gameState === 0) {
    const letter = tile1.innerText;
    tile1.disabled = true;
    if (playerTurn === 1){
      tile1.className = "player-one";
      tile1.innerText = 'X';
      boardState[0][0] = PLAYER_ONE;
    } else if (playerTurn === -1){
      tile1.className = "player-two";
      tile1.innerText = '0';
      boardState[0][0] = PLAYER_TWO;
    }
    handleBoard();
  }
}
function pressB2 (){
  if (gameState === 0) {
    const letter = tile2.innerText;
    tile2.disabled = true;
    if (playerTurn === 1){
      tile2.className = "player-one";
      tile2.innerText = 'X';
      boardState[0][1] = PLAYER_ONE;
    } else if (playerTurn === -1){
      tile2.className = "player-two";
      tile2.innerText = '0';
      boardState[0][1] = PLAYER_TWO;
    }
    handleBoard();
  }
}
function pressB3 (){
  if (gameState === 0) {
    const letter = tile3.innerText;
    tile3.disabled = true;
    if (playerTurn === 1){
      tile3.className = "player-one";
      tile3.innerText = 'X';
      boardState[0][2] = PLAYER_ONE;
    } else if (playerTurn === -1){
      tile3.className = "player-two";
      tile3.innerText = '0';
      boardState[0][2] = PLAYER_TWO;
    }
    handleBoard();
  }
}
function pressB4 (){
  if (gameState === 0) {
    const letter = tile4.innerText;
    tile4.disabled = true;
    if (playerTurn === 1){
      tile4.className = "player-one";
      tile4.innerText = 'X';
      boardState[1][0] = PLAYER_ONE;
    } else if (playerTurn === -1){
      tile4.className = "player-two";
      tile4.innerText = '0';
      boardState[1][0] = PLAYER_TWO;
    }
    handleBoard();
  }
}
function pressB5 (){
  if (gameState === 0) {
    const letter = tile5.innerText;
    tile5.disabled = true;
    if (playerTurn === 1){
      tile5.className = "player-one";
      tile5.innerText = 'X';
      boardState[1][1] = PLAYER_ONE;
    } else if (playerTurn === -1){
      tile5.className = "player-two";
      tile5.innerText = '0';
      boardState[1][1] = PLAYER_TWO;
    }
    handleBoard();
  }
}
function pressB6 (){
  if (gameState === 0) {
    const letter = tile6.innerText;
    tile6.disabled = true;
    if (playerTurn === 1){
      tile6.className = "player-one";
      tile6.innerText = 'X';
      boardState[1][2] = PLAYER_ONE;
    } else if (playerTurn === -1){
      tile6.className = "player-two";
      tile6.innerText = '0';
      boardState[1][2] = PLAYER_TWO;
    }
    handleBoard();
  }
}
function pressB7 (){
  if (gameState === 0) {
    const letter = tile7.innerText;
    tile7.disabled = true;
    if (playerTurn === 1){
      tile7.className = "player-one";
      tile7.innerText = 'X';
      boardState[2][0] = PLAYER_ONE;
    } else if (playerTurn === -1){
      tile7.className = "player-two";
      tile7.innerText = '0';
      boardState[2][0] = PLAYER_TWO;
    }
    handleBoard();
  }
}
function pressB8 (){
  if (gameState === 0) {
    const letter = tile8.innerText;
    tile8.disabled = true;
    if (playerTurn === 1){
      tile8.className = "player-one";
      tile8.innerText = 'X';
      boardState[2][1] = PLAYER_ONE;
    } else if (playerTurn === -1){
      tile8.className = "player-two";
      tile8.innerText = '0';
      boardState[2][1] = PLAYER_TWO;
    }
    handleBoard();
  }
}
function pressB9 (){
  if (gameState === 0) {
    const letter = tile9.innerText;
    tile9.disabled = true;
    if (playerTurn === 1){
      tile9.className = "player-one";
      tile9.innerText = 'X';
      boardState[2][2] = PLAYER_ONE;
    } else if (playerTurn === -1){
      tile9.className = "player-two";
      tile9.innerText = '0';
      boardState[2][2] = PLAYER_TWO;
    }
    handleBoard();
  }
}