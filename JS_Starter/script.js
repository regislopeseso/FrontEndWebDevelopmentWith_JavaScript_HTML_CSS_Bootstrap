// console.log("Hello from separated file");

// let name1 = "Alex";
// let age = 19;
// let salary = age * 200;
// let isMarried = false;

// console.log(
//   `His name is ${name1}, his age is ${age}. And he is married, right? ${
//     isMarried == true ? "True!" : "Nope!"
//   }. His salary $${salary},00`
// );
// 0;

// let job;
// console.log(job);

// job = "unemployed";
// console.log(job);

// job = 123;
// job = 2 * job;
// job++;
// console.log(job);
// console.log(job % 2);

// this is a commented line...

/*
this is a commented section
.
..
...
....
*/

//alert("This is a popup window, the content of the variable job is: " + job);
//job = prompt("the new content should be: ");
// console.log(job);

////! Basic operators:
// let a, b, c;

// //? Add and Dif: +, -
// a = 2;
// b = 3;
// c = a + b;
// console.log(`c = a + b = ${a} + ${b} = ${c}`);
// c++;
// console.log(`c++ = ${c}`);
// c = b - a;
// console.log(`c = a - b = ${a} - ${b} = ${c}`);
// c--;
// console.log(`c-- = ${c}`);

// //? Multiplication and Division: *, /
// c = a * b;
// console.log(`c = a * b = ${a} * ${b} = ${c}`);
// c = a / b;
// console.log(`c = a / b = ${a} / ${b} = ${c}`);

// //? Logical operators: >, >=, <, <=
// c = a > b;
// console.log(`a > b ? ${c}`);
// c = a <= b;
// console.log(`a <= b ? ${c}`);
// a = 10;
// b = "10";
// console.log(`a == b ? ${a == b}`);
// console.log(`a === b ? ${a === b}`);

// console.log(`(a !== b)? (${a} !== ${b})? ${a !== b}`);
// console.log(`!(a !== b)? !(${a} !== ${b})? ${!(a !== b)}`);

// a = 1;
// b = 5;
// c = 9;
// console.log(`a < b || b-? ${a == b}`);

////? Conditional Statements: if, else, else if
// let grade = prompt("Your grade is: ");

// if (grade < 40) {
//   console.log("You cannot go to the next class.");
// } else if (grade >= 40 && grade < 45) {
//   console.log("You cannot go to the next class but you can enter the exam");
// } else {
//   console.log("You can go to next class");
// }

// age = prompt("Your age is: ");

// if (age < 18) {
//   console.log("You cannot enter the cafe.");
// } else if (age < 23) {
//   console.log("You can enter the cafe but you cannot buy a drink");
// } else {
//   console.log("You can enter the cafe and buy a drink");
// }

////? alternatively:
// if (age < 18) {
//   console.log("You cannot enter the cafe.");
// }
//
// if (age < 18 && age < 23) {
//   console.log("You can enter the cafe but you cannot buy a drink");
//
// if (age >= 23)
// {
//   console.log("You can enter the cafe and buy a drink");
// }

////! Ternary Operator
// if (grade < 40) {
//   console.log("You cannot go to the next class.");
// } else if (grade >= 40 && grade < 45) {
//   console.log("You cannot go to the next class but you can enter the exam");
// } else {
//   console.log("You can go to next class");
// }

// grade < 45
////? console.log("You cannot go to the next class.")
//   : console.log("You can go to next class");

// var result = grade < 45 ? true : false;
// console.log(result);

////! Switch Statements
// var day;

// switch (day) {
//   case "saturday":
//     console.log("I like saturday");
//     break;

//   case "monday":
//     console.log("I don't like saturday");
//     break;

//   case "friday":
//     console.log("I really like saturday");
//     break;

//   default:
//     console.log("I don't know the day");
//     break;
// }

// switch (true) {
//   case grade < 40:
//     console.log("You cannot go to the next class");
//     break;
//   case grade >= 40 && grade < 45:
//     console.log("You cannot go to the next class but you can enter the exam");
//     break;
//   case grade >= 45:
//     console.log("You can go to the next class");
//     break;
// }

// var aG1 = 90;
// var aG2 = 80;
// var aG3 = 95;
// var aAvg = (aG1 + aG2 + aG3) / 3;
// console.log(`'Alex avg. grade: ${aAvg}'`);

// var sG1 = 89;
// var sG2 = 76;
// var sG3 = 98;
// var sAvg = (sG1 + sG2 + sG3) / 3;
// console.log(`'Sarah avg. grade: ${sAvg}'`);

// var nG1 = 89;
// var nG2 = 76;
// var nG3 = 98;
// var nAvg = (nG1 + nG2 + nG3) / 3;
// console.log(`'Sarah avg. grade: ${nAvg}'`);

// if (aAvg > sAvg && aAvg > nAvg) {
//   console.log(`'Alex has the highest avg. grade: ${aAvg}'`);
// } else if (sAvg > aAvg && sAvg > nAvg) {
//   console.log(`'Sarah has the highest avg. grade: ${sAvg}'`);
// } else {
//   console.log(`'Sarah has the highest avg. grade: ${nAvg}'`);
// }

////! Loops

// //? While
// let number = 1;
// while (number <= 10) {
//   console.log(number);
//   number += 2;
// }

// //* Quiz
// let evenN = 132;
// while (evenN <= 148) {
//   console.log(evenN);
//   evenN += 2;
//   // or;
//   // if (evenN % 2 === 0) {
//   //   console.log(evenN);
//   // }
//   // evenN++;
// }

// let divBySevenN = 25;
// while (divBySevenN <= 100) {
//   if (divBySevenN % 7 === 0) {
//     console.log(divBySevenN);
//   }
//   divBySevenN++;
// }

// //? For
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// //* Quiz
// for (let i = 132; i < 148; i++) {
//   i++;
//   console.log(i);
// }

// for (let i = 25; i < 100; i++) {
//   i % 7 === 0 && i % 5 === 0 ? console.log(i) : null;
// }

// //? Break and Continue
// console.log("continue statement");
// for (var i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }

// console.log("break statement");
// for (var i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   break;
// }

////! Functions
////? without arguments
// function sayHello() {
//   console.log("Hello world");
//   console.log("goodbye world");
// }

// sayHello();
// sayHello();
// sayHello();

// //? with arguments
// let userName;

// function sayHelloTo(userName) {
//   console.log($`Hi {userName}`);
// }

// sayHelloTo("Regis");

// //? return
// function cube(number) {
//   if (number > 999) {
//     return 0;
//   }
//   return number * number * number;
// }

// console.log(cube(4));
// console.log(cube(9999999999999999));
// //or

// let result = cube(3);
// console.log(result);

// //? Function Expression
// let calculateAge = function (currentYear, birthYear) {
//   return currentYear - birthYear;
// };

// var age = calculateAge(2025, 1992);
// console.log(age);

// //* Quiz
// function subtraction(x, y) {
//   return y - x;
// }

// let result = subtraction(18, 97);
// console.log(result);

// let isOdd = function (number) {
//   if (number % 2 !== 0) {
//     return true;
//   }
//   return false;
// };

// console.log(isOdd(5));

// let addition = function (number) {
//   let res = 0;
//   for (var i = 1; i <= number; i++) {
//     res += i;
//   }
//   return res;
// };

// let addResult = addition(3);
// console.log(addResult);

// //! Function Scope
// function sayName() {
//   let Name = "Sheldon";
//   console.log(Name);
// }

// // Compare
// sayName();
// // vs
// console.log(Name);

function sayHi() {
  let myWord = "Hi there";
  console.log(myWord);
  sayBye();

  function sayBye() {
    console.log(myWord);
  }
}

sayHi();
