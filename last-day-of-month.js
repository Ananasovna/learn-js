"use strict";

const getLastDayOfMonth = function (year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

let year = 2022;
let month = 3;

getLastDayOfMonth(year, month);
