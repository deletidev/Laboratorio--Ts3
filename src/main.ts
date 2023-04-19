import './style.css';

const reset = document.getElementById('reset');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const changeTurn = document.getElementById('change-turn');
const turnValue = document.getElementById('change-value');
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
  if (turn) {
    turn.textContent = '01';
    count = 1;
  }
};

const changeValue = (): void => {
  if (turn && turnValue instanceof HTMLInputElement) {
    count = parseInt(turnValue.value);
    //para evitar que el valor introducido no sea vacio o letras
    if (!Number.isNaN(count)) {
      turn.textContent = count.toString().padStart(2, '0');
      turnValue.value = '';
    }
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
  changeTurn.addEventListener('click', changeValue);
}
