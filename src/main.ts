import './style.css';

const reset = document.getElementById('reset');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const changeTurn = document.getElementById('change-turn');
const turnValue = document.getElementById('change-value');
const turn = document.getElementById('turn');
let count: number = 1;

const prevTurn = (): void => {
  if (turn && turn instanceof HTMLElement) {
    count--;
    turn.textContent = `${count}`.padStart(2, '0');
  }
};

const nextTurn = (): void => {
  if (turn && turn instanceof HTMLElement) {
    count++;
    turn.textContent = `${count}`.padStart(2, '0');
  }
};

const resetTurn = (): void => {
  if (turn && turn instanceof HTMLElement) {
    turn.textContent = '01';
    count = 1;
  }
};

const changeValue = (): void => {
  if (turn && turnValue instanceof HTMLInputElement) {
    //para evitar que el valor introducido no sea vacio o letras
    count = parseInt(turnValue.value);

    if (!Number.isNaN(count)) {
      turn.textContent = `${count}`.padStart(2, '0');
      turnValue.value = '';
    }
  }
};

if (next && next instanceof HTMLButtonElement) {
  next.addEventListener('click', nextTurn);
}

if (prev && prev instanceof HTMLButtonElement) {
  prev.addEventListener('click', prevTurn);
}

if (reset && reset instanceof HTMLButtonElement) {
  reset.addEventListener('click', resetTurn);
}

if (changeTurn && changeTurn instanceof HTMLButtonElement) {
  changeTurn.addEventListener('click', changeValue);
}

/*
Correcciones asegurarme de que es un btn es necesario para prevenir errores
count.toString().padStart(2, '0') === `${count}`.padStart(2, '0') pero el segundo es mas legible y cortito
*/
