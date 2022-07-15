const body = document.querySelector('body');
const bigImg = document.querySelector('.big-image');

function showImg() {
  switch (event.target.dataset.id) {
    case '3':
      bigImg.attributes.src.nodeValue = './Assets/img/3.png';
      break;
    case '5':
      bigImg.attributes.src.nodeValue = './Assets/img/5.png';
      break;
    case '7':
      bigImg.attributes.src.nodeValue = './Assets/img/7.png';
      break;
    case '8':
      bigImg.attributes.src.nodeValue = './Assets/img/8.png';
      break;
    case '9':
      bigImg.attributes.src.nodeValue = './Assets/img/9.png';
      break;
  }
}

body.addEventListener('click', showImg);