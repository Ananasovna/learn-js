// "use strict";

const getDateAgo = (date, days) => {
  return new Date(date.getTime() - days);
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));