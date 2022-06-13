
function getLengthOfMissingArray(arr) {
  let result = 0;

  if ( arr == null || arr == [] ||  arr.some(el => el.length == 0 ) ) {
    return 0;
  } else {
    arr.sort((a, b) => a.length - b.length).reduce((prevLength, current) => {
      if ((current.length - prevLength) > 1) {
        result = current.length - 1
      };
        return current.length;
    }, 0);
    
  }
  return result;
}

let arr = [ [ null ] ];

console.log(getLengthOfMissingArray(arr));
