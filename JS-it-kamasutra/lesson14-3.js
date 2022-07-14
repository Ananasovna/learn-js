const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const button = document.querySelector('.button');

function changeInputs() {
  let value1 = input1.value;
  let value2 = input2.value;
  input1.value = value2;
  input2.value = value1;
}

button.addEventListener('click', changeInputs);