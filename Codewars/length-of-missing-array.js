
function missingArrayLength(arr) {
  if (arr.length == 0 || arr.some(el => el === null)) {
    return 0;
  } else {
    let result = arr.sort().reduce((prevLength, current) => {
      console.log(prevLength, current);
      if (current.length == 0 || current === null) {
        return 0;
      } else if((current.length - prevLength) > 1) {
        console.log(сurrent.length - 1);
      } else {
        prevLength = current.length;
      }
    });
    console.log(result);
  }
  
}

let arr = [[], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]];

console.log(missingArrayLength(arr));