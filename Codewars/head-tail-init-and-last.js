const head = (arr) => {return arr[0]}

const tail = (arr) => {return arr.slice(1)}

const init = (arr) => {return arr.slice(0, arr.length - 1)}

const last = (arr) => {return arr[arr.length - 1]};

let arr = [1, 2, 3, 4, 5];

console.log('head:', head(arr),"\n",'tail:', tail(arr), "\n", 'init:', init(arr), "\n", 'last:', last(arr));
