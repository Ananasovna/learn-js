const firstNameId = 'first-name';
const firstNameEl = document.getElementById(firstNameId);
const lastNameId = 'last-name';
const lastNameEl = document.getElementById(lastNameId);
const adressId = 'adress';
const adressEl = document.getElementById(adressId);
const citiesId = 'cities';
const citiesEl = document.getElementById(citiesId);
const hobbiesId = 'hobbies';
const hobbiesEl = document.getElementById(hobbiesId);
const imgWrapperId = 'img-wrapper';
const imgWrapperEl = document.getElementById(imgWrapperId);
const imgId = 'img';
const imgEl = document.getElementById(imgId);

window.console.log('Name:', firstNameEl.value, 
  'Last name:', lastNameEl.value, 
  'Adress:', adressEl.value,
  'City:', citiesEl.value,
  'Hobbies:', hobbies.value,
  'wrapper:', imgWrapperEl.innerHTML,
  'img:', imgEl.alt);

firstNameEl.value = 'Ann';
lastNameEl.value = 'Black';

adressEl.className = 'error-input';
imgEl.src = 'https://p.favim.com/orig/2019/04/22/stitch-wallpaper-cartoon-Favim.com-7085347.jpg';
lastNameEl.title = 'last name';
citiesEl.value = 'Sochy';
imgWrapperEl.innerHTML = 'Hello!';