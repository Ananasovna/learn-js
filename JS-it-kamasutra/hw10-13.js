let inputs = document.getElementsByClassName('input');
inputs = [...inputs];

const changeValue = function (newValue) {
  inputs.forEach(item => item.value = newValue);
}

changeValue('Nancy');
changeValue('Ushkova');
changeValue('Nancy');
