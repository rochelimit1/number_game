let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessesCount = 1;
let resetButton;

function checkGuess(event) {
  event.preventDefault();
  const userGuess = Number(guessField.value);

  if (randomNumber === userGuess) {
    lastResult.textContent = '축하합니다! 맞추셨어요!';
    setGameOver();
  } else if (guessesCount === 10) {
    lastResult.textContent = '게임 오버! 10회를 모두 사용하셨습니다.';
    setGameOver();
  } else {
    if (randomNumber > userGuess) {
      lowOrHi.textContent = '추측한 숫자보다 높습니다.';
    } else if (randomNumber < userGuess) {
      lowOrHi.textContent = '추측한 숫자보다 낮습니다.';
    }
  }
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '새 게임하기';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessesCount = 1;
  guessField.disabled = false;
  guessSubmit.disabled = false;
  resetButton.parentNode.removeChild(resetButton);
  randomNumber = Math.floor(Math.random() * 100) + 1;
  lowOrHi.textContent = '';
  lastResult.textContent = '';
  guessField.value = '';
}

guessSubmit.addEventListener('click', checkGuess);
//   guessesCount = guessesCount + 1;
//   guessesCount +=1;
guessesCount++;
