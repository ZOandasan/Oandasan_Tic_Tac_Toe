/*Constants*/
PLAYER_ONE = 1;
PLAYER_TWO = -1;
GAME_TIE = 'T';


/*Variables*/
let gameState;
let playerTurn;
let boardState;


/*Cashed Elements*/
const tiles = document.querySelectorAll('section button');
const titleText = document.querySelector('h2');
const reset = document.getElementById('replay');


/*Event Listeners*/
document.querySelector('button').addEventListener('click', handleBoard);
document.querySelector('#replay').addEventListener('click', resetGame)



/*Functions*/

initialize();

function handleBoard(evt) {
  renderButtons(evt);
  checkWinConditions();
  playerTurn *= -1;
  render();
}

function renderButtons(evt){
  tiles.forEach(function(btn) {
    const letter = btn.innerText;
    //Button is Disabled if the inner Text is either X or O
    btn.disabled = (PLAYER_ONE || PLAYER_TWO);

    if (playerTurn === -1){
      btn.className = "player-one";
      tiles.innerText = PLAYER_ONE;
    } else if (playerTurn === 1){
      btn.className = "player-two";
      tiles.innerText = PLAYER_TWO;
    } 
  });
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
    let boardSpaces = 9;
    for (let vert=0; vert < boardState.length; vert++){
      for (let hor=0; hor < boardState[vert].length; hor++){
        if (boardState[vert][hor] === PLAYER_ONE || PLAYER_TWO) {
          boardSpaces--;
        }
      }
    }
    if (boardSpaces === 0){
      gameStatus = GAME_TIE;
    }
  }
}

function render() {
  //

  if (gameState === 0){
    if (playerTurn === 1){
      titleText.innetHTML = "Player 1's Turn";
    } else {
      titleText.innetHTML = "Player 2's Turn";
    }
  } else if (gameState === 1 ) {
    titleText.innetHTML = "Player 1's Win";
  } else if (gameState === -1 ) {
    titleText.innetHTML = "Player 2's Win";
  } else {
    titleText.innetHTML = "It's a Tie";
  }
}


function initialize () {
  boardState = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  playerTurn = 1;
  gameState = 0;
  render();
}

function resetGame () {
  initialize();
  //reset Buttons to their original color
}