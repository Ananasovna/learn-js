'use strict'

// let user;
// let userName = "Vasya";
// user = userName;
// alert(user);

// if (null) {
//   console.log('false');
// } else if (' ') {
//   console.log('true');
// }

// let age = 50;
// if (age >= 14 && age <= 90) {
//   console.log('True!');
// } else {
//   console.log('nope');
// }

// let age = 2;
// if (age < 14 || age > 90) {
//   console.log('True!');
// } else {
//   console.log('nope');
// }

// let age = 14;
// if (!(age >= 14) || !(age <= 90)) {
//   console.log('True!');
// } else {
//   console.log('nope');
// }

// let login = prompt('Enter login', '');
// if (login == 'Admin') {

//   let password = prompt('Enter password');
//   if (password == 'I\'m the boss') {
//     alert('Good day!');
//   } else if (password == null) {
//     alert('Canceled');
//   } else {
//     alert('Wrong password');
//   }
  
// } else if (login == null || login == undefined) {
//   alert('Canceled');
// } else {
//   alert('I don\'t know you')
// }

// for (let i = 2; i <= 10; i++) {
//   if (i % 2) continue;
//   alert(i);
// }

// let i = 0;
// while ( i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// let userNumber;
// do {
//   userNumber = prompt('Give me number', '');
// } while (userNumber <= 100 && userNumber);
// alert('nice');

// nextTime:
// let n = 10;
// for (let i = 2; i <= n; i++) {
//   if ((i % i) && (i % 1) && (i < 1)) continue nextTime;
//   console.log(i);
// }

// let n = +prompt ('введите число', '10');

// cycle: for (; (n >= 2); n--) {

// for (let i = 2; i < n; i++) {
// if (n % i == 0) continue cycle;
// }

// console.log(n);
// }

// let browser = 'Safari';
// if (browser == 'Edge') {
//   alert ('You\'ve got the Edge!');
// } else if (browser == 'Chrome', 'Firefox', 'Safari', 'Opera') {
//   alert('Okay we support these browsers too');
// } else {
//   alert('We hope that this page looks ok!');
// }

// 


// function showMessage(from, text) {

//   from = '*' + from + '*'; // немного украсим "from"

//   alert( from + ': ' + text );
// }

// let from = "Аня";

// showMessage(from, "Привет"); // *Аня*: Привет
// showMessage(from, "как дела?");

// // значение "from" осталось прежним, функция изменила значение локальной переменной
// alert( from ); // Аня

// let age = prompt ('What is your age?', '');
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// let a = prompt('a', '');
// let b = prompt('b', '');

// function min(a, b) {
//   if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }

// alert(min(a, b));

// let x = prompt('x', '');
// let n = prompt('n', '');

// function pow(x, n) {
//   if (n >= 1) {
//     return x ** n;
//   } else {
//     alert('Wrong n');
//   }
  
// } 

// alert(pow);

// let ask = (question, yes, no) => confirm(question) = yes ?
//   () => alert("Вы согласились.") :
//   () => alert("Вы отменили выполнение.");
// }

// ask("Вы согласны?", yes, no);

// let user = {};

// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;


// let salaries = {
//   // John: 100,
//   // Ann: 160,
//   // Pete: 130
// }

// function calcSalaries(obj) {
//   for(let key in obj) {
//     let sum = obj.John + obj.Ann + obj.Pete;
//     console.log(sum);
//   }
//   return 0;
//   console.log(calcSalaries);
// }
// calcSalaries(salaries);
// console.log(calcSalaries);

// let userName = 'Вася';

// function showMessage(variable) {
//   variable = "Петя"; // объявляем локальную переменную

//   let message = 'Привет, ' + variable; // Петя
//   return message;
// }

// // alert(showMessage(userName));

// let a = showMessage(userName);
//  alert(a);

// let userName = 'Вася';

// function showMessage(variable = 'Nancy') {
//   let message = 'Привет, ' + variable;
//   return message;
// }

// // alert(showMessage(userName));

// let a = showMessage();
//  alert(a);

// function min(a, b) {
//   if (a > b) {
//   return b;
//   }
//   return a;
// }

// console.log(min(2, -5));

// function pow(x, n) {
//   if (n >= 1) {
//     return x ** n;
//   }
// }

// let x = prompt('Write x', '');
// let n = prompt('Write n', '');

// console.log(pow(x, n));

// var arg = 4,                         // arg for "string" function call
//     obj = {
//       param: 'val',                  // parameter name for function in string  
//       func: 'return val'  // function that need call with arg var
//     };

// let val = 'val';
// let a = Function(obj.func);
// console.log(a(obj.func));

// function runYourString(arg, obj, a) {
//   obj.param = arg;
//   return a;
// }

// console.log(runYourString(arg, obj, a));

// let runYourString = function (val, a) {
//   let result = a;
//   return result;  
// };


// console.log(runYourString(val, a));

// function showName() {
//   console.log('Вася');
// }

// setTimeout(showName, 0);
// console.log('Коля');
// let showMessage;

// if (2 > 1) {
//   showMessage = function() {
//     console.log('Message');
//   }
// }

// showMessage()

// let func = a => a * 2;
// console.log(func(2));

// let calculator = { 
//   read() {
//     this.num1 = +prompt('Give me a number', '');
//     this.num2 = +prompt('Give me another number', '');
//   },

//   sum() {
//     return this.num1 + this.num2;
//   },

//   mul() {
//     return this.num1 * this.num2;
//   }
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// let user = {
//   name: 'Ann',
//   age: 30,
// }
// let showName = function() {
//   alert(user.name);
// }

// showName();


// function User(name) {
//   return { name: name, isAdmin: false};
// }

// console.log(new User("Вася"));

// // console.log(user.name); // Вася
// // console.log(user.isAdmin); // fals
// console.log(user);
// console.log(user.name);

// function BigUser() {

//   this.name = "Вася";

//   // return { name: "Godzilla" };  // <-- возвращает этот объект
// }
// let me = new BigUser();

// console.log(me.name);

// let userInfo = {
//   name: 'Вася',
//   age: 30,
//   address: {
//     city: 'Kaliningrad',
//     street: 'beautiful',
//   },
//   showInfo() {
//     // console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: ${userInfo.address.city}, ${userInfo.address.street}`);
//     console.log(`${this.name}, ${this.age} лет. Адрес: ${this.address.city}, ${this.address.street}`);
//   }

// }

// userInfo.showInfo();

// for (let key in userInfo) {
//   console.log(key);
//   console.log(userInfo[key]);
// }

// for (let key in userInfo.address) {
//   console.log(key);
//   console.log(userInfo.address[key]);
// }

// function UserInfo(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let user1 = new UserInfo('John', 27);
// let user2 = new UserInfo('Kenny', 45);
// console.log(user1);
// console.log(user2);

// let userInfo = {
//   name: 'Вася',
//   age: 30,
//   'likes js': true,
// }

// console.log(userInfo['likes js']);

// for (const key in userInfo) {
//   const value = userInfo[key];
//   console.log(value);
// }

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt("give me a number", '');
//   };
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);

// console.log(accumulator?.value?.first?.second)

// let user1 = {
//   firstName: 'Adam',
// };

// let user2 = null;

// let key = 'firstName';

// console.log(user1[key]);
// console.log(user2[key]);

// let user = {};
// console.log(user?.name);

// let id = Symbol('num1');
// // console.log(typeof(id));
// // // console.log(id.toString());
// // // console.log(typeof(id.toString()));
// // console.log(id.description);
// // console.log(typeof(id.description));
// alert(id.toString());

// let user = {
//   name: "Nancy",
//   age: 30,
// };

// let address = {
//   street: 'fancy'
// };

// let id = Symbol('id');
// user[id] = 1;

// address[id] = 2;

// console.log(user);
// console.log(address);

// for (let key in user) {
//   console.log(key);
// }

// console.log(user[id]);

// alert(user);
// console.log(user);
// anotherUser[user] = 123;

let user = {
  name: "58",

  toString() {
    return this.name;
  }
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500
alert(+user);