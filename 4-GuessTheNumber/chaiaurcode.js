// console.log(parseInt(Math.random() * 100 + 1));
let randNum = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById('subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // If value is int >  0 && < 100
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    alert('Please enter a valid number between 1 & 100 ');
  } else {
    prevGuess.push(guess);
    if (numGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was ${randNum}`);
      console.log(prevGuess);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // printing of guess message
  if (guess === randNum) {
    displayMessage(`You Guessed it Right`);
    endGame();
  } else if (guess < randNum) {
    displayMessage(`Number is TOO low`);
  } else {
    displayMessage(`Number is TOO high`);
  }
}

function displayGuess(guess) {
  // cleanUp method
  userInput.value = '';
  guessSlot.innerHTML = prevGuess[prevGuess.length - 1];
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}
function displayMessage(message) {
  // empty input for next guess, add guess to innerhtml,& dom mani

  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
  //
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', (e) => {
    randNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
  // playGame(true)
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

console.log(userInput);
