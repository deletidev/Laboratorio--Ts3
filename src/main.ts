import './style.css';

const reset = document.getElementById('reset');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const changeTurn = document.getElementById('turn-change');
const turn = document.getElementById('turn');
let count: number;

if (turn && turn.textContent) {
  count = parseInt(turn.textContent);
}

const prevFc = (): void => {
  if (turn) {
    count--;
    turn.textContent = count.toString().padStart(2, '0');
  }
};

const nextFc = (): void => {
  if (turn) {
    count++;
    turn.textContent = count.toString().padStart(2, '0');
  }
};

const resetFc = (): void => {
  if (turn && changeTurn instanceof HTMLInputElement) {
    turn.textContent = '01';
    changeTurn.value = '';
    count = 1;
  }
};

const changeFc = (): void => {
  if (turn && changeTurn instanceof HTMLInputElement) {
    count = parseInt(changeTurn.value);
    turn.textContent = count.toString();
  }
};

if (next) {
  next.addEventListener('click', nextFc);
}

if (prev) {
  prev.addEventListener('click', prevFc);
}

if (reset) {
  reset.addEventListener('click', resetFc);
}
if (changeTurn) {
  changeTurn.addEventListener('change', changeFc);
}
