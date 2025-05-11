const secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  const message = document.getElementById('message');

  if (guess === secretNumber) {
    message.textContent = 'Parabéns! Você acertou!';
  } else if (guess < secretNumber) {
    message.textContent = 'Tente um número maior.';
  } else {
    message.textContent = 'Tente um número menor.';
  }
}
