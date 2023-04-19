import './style.css';

const reset = document.getElementById('reset');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const changeTurn = document.getElementById('turn-change');
const turn = document.getElementById('turn');

const desactivateBtn = (btn: HTMLButtonElement): void => {
  btn.disabled = true;
};
const activateBtn = (btn: HTMLButtonElement): void => {
  btn.disabled = false;
};

if (
  turn !== null &&
  turn !== undefined &&
  next instanceof HTMLButtonElement &&
  next !== null &&
  next !== undefined &&
  prev instanceof HTMLButtonElement &&
  prev !== null &&
  prev !== undefined &&
  reset !== null &&
  reset !== undefined &&
  changeTurn instanceof HTMLInputElement &&
  changeTurn !== null &&
  changeTurn !== undefined
) {
  let count = parseInt(changeTurn.value);

  const prevFc = (): void => {
    activateBtn(next);
    count--;
    turn.textContent = count.toString().padStart(2, '0');
    changeTurn.value = count.toString();
    if (count === 1) {
      desactivateBtn(prev);
    }
  };

  const nextFc = (): void => {
    activateBtn(prev);
    count++;
    turn.textContent = count.toString().padStart(2, '0');
    changeTurn.value = count.toString();
    if (count === 99) {
      desactivateBtn(next);
    }
  };

  const resetFc = (): void => {
    turn.textContent = '01';
    changeTurn.value = '1';
    count = 1;
    desactivateBtn(prev);
  };

  const changeFc = (): void => {
    activateBtn(prev);
    activateBtn(next);
    let number = changeTurn.value;
    turn.textContent = number.toString().padStart(2, '0');
    count = parseInt(number);
    if (parseInt(number) >= 99) {
      number = '99';
      count = 99;
      turn.textContent = '99';
    }
    if (parseInt(number) <= 1 || number === '') {
      number = '1';
      count = 1;
      turn.textContent = '01';
    }
    if (count <= 1) {
      desactivateBtn(prev);
    }
    if (count >= 99) {
      desactivateBtn(next);
    }
  };
  console.log('aqui');
  next.addEventListener('click', nextFc);
  prev.addEventListener('click', prevFc);
  reset.addEventListener('click', resetFc);
  changeTurn.addEventListener('change', changeFc);
}

// const desactivateBtn = (btn: any): void => {
//   if (btn instanceof HTMLButtonElement) {
//     btn.disabled = true;
//   }
// };
// const activateBtn = (btn: any): void => {
//   if (btn instanceof HTMLButtonElement) {
//     btn.disabled = false;
//   }
// };
// if (reset !== null && reset !== undefined) {
//   reset.addEventListener('click', () => {
//     if (
//       turn !== null &&
//       turn !== undefined &&
//       changeTurn instanceof HTMLInputElement &&
//       changeTurn !== null &&
//       changeTurn !== undefined
//     ) {
//       turn.textContent = '01';
//       changeTurn.value = '1';
//       count = 1;
//       desactivateBtn(prev);
//     }
//   });
// }

// if (next !== null && next !== undefined) {
//   next.addEventListener('click', () => {
//     activateBtn(prev);
//     count++;
//     if (turn !== null && turn !== undefined) {
//       turn.textContent = count.toString().padStart(2, '0');
//       changeTurn.value = count.toString();
//     }
//     if (count === 99) {
//       desactivateBtn(next);
//     }
//   });
// }

// if (prev !== null && prev !== undefined) {
//   prev.addEventListener('click', () => {
//     activateBtn(next);
//     count--;
//     if (turn !== null && turn !== undefined) {
//       turn.textContent = count.toString().padStart(2, '0');
//       changeTurn.value = count.toString();
//     }
//     if (count === 1) {
//       desactivateBtn(prev);
//     }
//   });
// }

// if (
//   changeTurn instanceof HTMLInputElement &&
//   changeTurn !== null &&
//   changeTurn !== undefined
// ) {
//   changeTurn.addEventListener('change', () => {
//     activateBtn(prev);
//     activateBtn(next);
//     let number = changeTurn.value;
//     if (turn !== null && turn !== undefined) {
//       turn.textContent = number.toString().padStart(2, '0');
//       count = parseInt(number);
//       if (parseInt(number) >= 99) {
//         number = '99';
//         count = 99;
//         turn.textContent = '99';
//       }
//       if (parseInt(number) <= 1 || number === '') {
//         number = '1';
//         count = 1;
//         turn.textContent = '01';
//       }
//     }
//     if (count <= 1) {
//       desactivateBtn(prev);
//     }
//     if (count >= 99) {
//       desactivateBtn(next);
//     }
//   });
// }
