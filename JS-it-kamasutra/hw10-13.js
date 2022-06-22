let inputs = document.getElementsByClassName('input');
inputs = [...inputs];

const changeValue = function (newValue) {
  inputs.forEach(item => item.value = newValue);
}

changeValue('Nancy');
changeValue('Ushkova');
changeValue('Nancy');

const setError = function(id) {
  let element = document.getElementById(id);
  element.className = 'error';
}

const getSumm = function (a, b) {
  return a + b;
}


const sayHello = function() {
  alert('My name');
}

setTimeout(sayHello, 1000);

const timeoutError = function() {
  setError('div');
}

setTimeout(timeoutError, 1000);

function hideElement(id) {
  console.log(id);
  document.getElementById(id).className = 'hidden';
}

hideElement('input2');

function hideElement(id) {
  document.getElementById(id).className = '';
}


// setInterval(() => console.log('sec'), 1);