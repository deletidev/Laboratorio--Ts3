import './style.css';

const reset = document.getElementById('reset');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const changeTurn = document.getElementById('turn-change');
const turn = document.getElementById('turn');
let count = 0;

if (turn && turn.textContent) {
  count = parseInt(turn.textContent);
}

const prevTurn = (): void => {
  if (turn) {
    count--;
    turn.textContent = count.toString().padStart(2, '0');
  }
};

const nextTurn = (): void => {
  if (turn) {
    count++;
    turn.textContent = count.toString().padStart(2, '0');
  }
};

const resetTurn = (): void => {
  if (turn && changeTurn instanceof HTMLInputElement) {
    turn.textContent = '01';
    changeTurn.value = '';
    count = 1;
  }
};

const changeValue = (): void => {
  if (turn && changeTurn instanceof HTMLInputElement) {
    count = parseInt(changeTurn.value);
    turn.textContent = count.toString().padStart(2, '0');
  }
};

if (next) {
  next.addEventListener('click', nextTurn);
}

if (prev) {
  prev.addEventListener('click', prevTurn);
}

if (reset) {
  reset.addEventListener('click', resetTurn);
}
if (changeTurn) {
  changeTurn.addEventListener('change', changeValue);
}
