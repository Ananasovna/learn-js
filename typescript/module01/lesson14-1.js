const input = document.getElementById('password-input');
const button = document.getElementById('input-button');

function changeElType() {
  input.type === 'password' ? input.type = 'text' : input.type = 'password'; 
}

button.addEventListener('click', changeElType);
