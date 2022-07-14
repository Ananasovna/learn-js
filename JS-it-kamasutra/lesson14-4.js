const inputs = document.querySelectorAll('.input');
const body = document.querySelector('body');

function check() {
    if(event.target.value < 10 || event.target.value > 50) {
      event.target.classList.add('wrong');
    } else {
      event.target.classList.remove('wrong');
    }
}

body.addEventListener('change', check);