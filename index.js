let turn = '◯';
const td = document.querySelectorAll('.td');

const mark = (e) => {
  if (e.target.innerHTML == '') {
    e.target.innerHTML = turn;
    changeTurn();
  }
}

const changeTurn = () => {
  if (turn == '◯') {
    turn = '✕';
  } else {
    turn = '◯';
  }
}


const reset = () => {
  for (let i = 0; i < td.length; i++) {
    if (td[i].innerHTML) {
      td[i].innerHTML = "";
    }
  }
}

const setMaru = () => {
  turn = '◯';
}

const setBatu = () => {
  turn = '✕';
}

document.getElementById('b1').addEventListener('click', mark);
document.getElementById('b2').addEventListener('click', mark);
document.getElementById('b3').addEventListener('click', mark);
document.getElementById('b4').addEventListener('click', mark);
document.getElementById('b5').addEventListener('click', mark);
document.getElementById('b6').addEventListener('click', mark);
document.getElementById('b7').addEventListener('click', mark);
document.getElementById('b8').addEventListener('click', mark);
document.getElementById('b9').addEventListener('click', mark);

document.getElementById('reset').addEventListener('click', reset);

document.getElementById('maru').addEventListener('click', setMaru)
document.getElementById('batu').addEventListener('click', setBatu)