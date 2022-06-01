// "use strict";

let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user);
json = JSON.parse(json);
console.log(typeof json);


let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  return (key != '' && value == 'meetup' ) ? undefined : value;
}));
