const grid = document.querySelector('.grid');
const cards = ['🍎','🍌','🍇','🍊','🍒','🍓'];
const gameCards = [...cards, ...cards].sort(() => 0.5 - Math.random());

let firstCard = null;
let lock = false;

gameCards.forEach(fruit => {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.fruit = fruit;
  card.addEventListener('click', flipCard);
  grid.appendChild(card);
});

function flipCard() {
  if (lock || this.classList.contains('revealed')) return;

  this.textContent = this.dataset.fruit;
  this.classList.add('revealed');

  if (!firstCard) {
    firstCard = this;
  } else {
    lock = true;
    if (firstCard.dataset.fruit === this.dataset.fruit) {
      firstCard = null;
      lock = false;
    } else {
      setTimeout(() => {
        firstCard.textContent = '';
        this.textContent = '';
        firstCard.classList.remove('revealed');
        this.classList.remove('revealed');
        firstCard = null;
        lock = false;
      }, 1000);
    }
  }
}
