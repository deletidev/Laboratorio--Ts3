import './style.css';

const reset = document.getElementById('reset');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const changeTurn = document.getElementById('turn-change') as HTMLInputElement;
let turn = document.getElementById('turn');
let count = parseInt(changeTurn.value);

const desactivateBtn = (btn: any): void => {
  if (btn instanceof HTMLButtonElement) {
    btn.disabled = true;
  }
};

const activateBtn = (btn: any): void => {
  if (btn instanceof HTMLButtonElement) {
    btn.disabled = false;
  }
};

if (reset !== null && reset !== undefined) {
  reset.addEventListener('click', () => {
    if (
      turn !== null &&
      turn !== undefined &&
      changeTurn instanceof HTMLInputElement &&
      changeTurn !== null &&
      changeTurn !== undefined
    ) {
      turn.textContent = '01';
      changeTurn.value = '1';
      count = 1;
      desactivateBtn(prev);
    }
  });
}

if (next !== null && next !== undefined) {
  next.addEventListener('click', () => {
    activateBtn(prev);
    count++;
    if (turn !== null && turn !== undefined) {
      turn.textContent = count.toString().padStart(2, '0');
      changeTurn.value = count.toString();
    }
    if (count === 99) {
      desactivateBtn(next);
    }
  });
}

if (prev !== null && prev !== undefined) {
  prev.addEventListener('click', () => {
    activateBtn(next);
    count--;
    if (turn !== null && turn !== undefined) {
      turn.textContent = count.toString().padStart(2, '0');
      changeTurn.value = count.toString();
    }
    if (count === 1) {
      desactivateBtn(prev);
    }
  });
}

if (
  changeTurn instanceof HTMLInputElement &&
  changeTurn !== null &&
  changeTurn !== undefined
) {
  changeTurn.addEventListener('change', () => {
    activateBtn(prev);
    activateBtn(next);
    if (turn !== null && turn !== undefined) {
      turn.textContent = changeTurn.value.toString().padStart(2, '0');
      count = parseInt(changeTurn.value);
    }
    if (count <= 1) {
      desactivateBtn(prev);
    }
    if (count >= 99) {
      desactivateBtn(next);
    }
    if (
      parseInt(changeTurn.value) >= 99 &&
      turn !== null &&
      turn !== undefined
    ) {
      changeTurn.value = '99';
      count = 99;
      turn.textContent = '99';
    }
    if (
      (parseInt(changeTurn.value) <= 1 &&
        turn !== null &&
        turn !== undefined) ||
      (changeTurn.value === '' && turn !== null && turn !== undefined)
    ) {
      console.log('aqui');
      changeTurn.value = '1';
      count = 1;
      turn.textContent = '01';
    }
  });
}
