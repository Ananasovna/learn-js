
function deepCount(arr) {
  let number = 0;

  function countElements (arr) {
    number += arr.length;

    arr.forEach( (item) => {
      if (Array.isArray(item)) {
        countElements(item);
      }
    })
  }
  
  countElements(arr);
  return number;
}

console.log(deepCount([1, 2, [3, 4, [5]]]));