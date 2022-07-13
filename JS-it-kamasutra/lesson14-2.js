const span = document.querySelector('.status-span');
const statusBlock = document.querySelector('.status-wrapper');
const button = document.querySelector('.status-save-button');
const input = document.querySelector('.status-input');

function changeClass() {
  span.classList.toggle('hidden');
  statusBlock.classList.toggle('hidden');
}

function changeStatus() {
  changeClass();
  input.value = span.innerHTML;
}

function saveStatus() {
  changeClass();
  span.innerHTML = input.value;
}

button.addEventListener('click', saveStatus);
span.addEventListener('click', changeStatus);