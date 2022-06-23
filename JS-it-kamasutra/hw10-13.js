let inputs = document.getElementsByClassName('input');
inputs = [...inputs];

// const changeValue = function (newValue) {
//   inputs.forEach(item => item.value = newValue);
// }

// changeValue('Nancy');
// changeValue('Ushkova');
// changeValue('Nancy');

// const setError = function(id) {
//   let element = document.getElementById(id);
//   element.className = 'error';
// }

// const getSumm = function (a, b) {
//   return a + b;
// }


// // const sayHello = function() {
// //   alert('My name');
// // }

// // setTimeout(sayHello, 1000);

// const timeoutError = function() {
//   setError('div');
// }

// setTimeout(timeoutError, 1000);

// function hideElement(id) {
//   console.log(id);
//   document.getElementById(id).className = 'hidden';
// }

// hideElement('input2');

// function hideElement(id) {
//   document.getElementById(id).className = '';
// }


// // setInterval(() => console.log('sec'), 1);

// function deleteEl(id) {
//   let el = document.getElementById(id);
//   if (el != null) {
//     el.remove();
//   }
// }

// deleteEl('input1');

// function classAdd(id, className) {
//   let el = document.getElementById(id);
//   console.log(el);
//   if (el != null) {
//     el.className = className;
//   }
// }

// classAdd('textarea', 'error');


// function makeNarrow(el) {
//   classAdd(el, 'width-0');
// }

// makeNarrow('textarea');

// function showEl(el) {
//   classAdd(el, '');
// }

// showEl('textarea');

function deleteElByValue(arr, valueForDelete) {
  arr.forEach(item => {
    if (item.value === valueForDelete) {
      item.remove();
    }
  });
}

// deleteElByValue(inputs, '3');

// function deleteElByClass(arr, valueForDelete) {
//   arr.forEach(item => {
//     if (item.classList.contains(valueForDelete)) {
//       item.remove();
//     }
//   });
// }

// deleteElByClass(inputs, 'hey');

function hasClassHey(el) {
  if (el.classList.contains('hey')) {
    return true;
  } else {
    return false;tsc 
  }
}

// let el = document.getElementById('input2');
// console.log(hasClassHey(el));

function removeElementIfConditionsTrue(elements, predicate) {
  elements.forEach(item => {
    if (predicate(item)) item.remove();
  });
}

removeElementIfConditionsTrue(inputs, hasClassHey);

function getArrSumm(arr, func) {
  let result = arr.reduce((sum, current) => sum + current, 0);
  func(result);
}

function alertResult(number) {
  console.log(number);
}

let numbers = [2, 3, 5];

getArrSumm(numbers, alertResult);

function deleter(el) {
  el.remove();
}

function hider(el) {
  el.classList.add('hidden');
}

function getConcreteFunctionByName(name) {
  switch (name) {
    case 'd':
      return deleter;
    case 'h':
      return hider;
  }
}

let concreteProcessor = getConcreteFunctionByName('d');

// inputs.forEach(item => concreteProcessor(item));

function addError(el) {
  el.classList.add('error');
}

function makeWide(el) {
  el.classList.add('width-500');
}

let methods = [addError, makeWide];

function changeElements(arrEl, arrFunc) {
  arrEl.forEach(el => arrFunc.forEach(item => item(el)));
}

changeElements(inputs, methods);