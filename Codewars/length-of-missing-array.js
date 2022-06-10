
function missingArrayLength(arr) {
  let result;
  if (arr.length == 0 || arr.some(el => el === null)) {
    return 0;
  } else {
    let newArr = arr.sort();
    result = newArr.reduce((prevLength, current) => {
      console.log("prevLenth:", prevLength, "current:", current);
      if ((current.length - prevLength) > 1) {
        console.log("current:", current.length);
        return (current.length - 2);
      } else {
        return current.length;
      }
    }, 0);
    console.log(result);
  }
  return result;
}

let arr = [ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]];
console.log("sorted:", arr.sort((a, b) => a - b));

console.log(missingArrayLength(arr));

// написать ф-b. для сорта по длинне, типа (a.length > b.length)