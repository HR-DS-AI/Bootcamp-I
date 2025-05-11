function play(playerChoice) {
  const options = ['pedra', 'papel', 'tesoura'];
  const cpuChoice = options[Math.floor(Math.random() * 3)];
  let result = '';

  if (playerChoice === cpuChoice) {
    result = `Empate! Ambos escolheram ${playerChoice}.`;
  } else if (
    (playerChoice === 'pedra' && cpuChoice === 'tesoura') ||
    (playerChoice === 'papel' && cpuChoice === 'pedra') ||
    (playerChoice === 'tesoura' && cpuChoice === 'papel')
  ) {
    result = `Você venceu! ${playerChoice} vence ${cpuChoice}.`;
  } else {
    result = `Você perdeu! ${cpuChoice} vence ${playerChoice}.`;
  }

  document.getElementById('resultado').textContent = result;
}
