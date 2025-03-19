console.log("Hello from separated file");

let name1 = "Alex";
let age = 19;
let salary = age * 200;
let isMarried = false;

console.log(
  `His name is ${name1}, his age is ${age}. And he is married, right? ${
    isMarried == true ? "True!" : "Nope!"
  }. His salary $${salary},00`
);
0;

let job;
console.log(job);

job = "unemployed";
console.log(job);

job = 123;
job = 2 * job;
job++;
console.log(job);
console.log(job % 2);

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
console.log(job);

//! Basic operators:
let a, b, c;

//? Add and Dif: +, -
a = 2;
b = 3;
c = a + b;
console.log(`c = a + b = ${a} + ${b} = ${c}`);
c++;
console.log(`c++ = ${c}`);
c = b - a;
console.log(`c = a - b = ${a} - ${b} = ${c}`);
c--;
console.log(`c-- = ${c}`);

//? Multiplication and Division: *, /
c = a * b;
console.log(`c = a * b = ${a} * ${b} = ${c}`);
c = a / b;
console.log(`c = a / b = ${a} / ${b} = ${c}`);

//? Logical operators: >, >=, <, <=
c = a > b;
console.log(`a > b ? ${c}`);
c = a <= b;
console.log(`a <= b ? ${c}`);
a = 10;
b = "10";
console.log(`a == b ? ${a == b}`);
console.log(`a === b ? ${a === b}`);

console.log(`(a !== b)? (${a} !== ${b})? ${a !== b}`);
console.log(`!(a !== b)? !(${a} !== ${b})? ${!(a !== b)}`);

a = 1;
b = 5;
c = 9;
console.log(`a < b || b-? ${a == b}`);

//? Conditional Statements: if, else, else if
let grade = prompt("Your grade is: ");

if (grade < 40) {
  console.log("You cannot go to the next class.");
} else if (grade >= 40 && grade < 45) {
  console.log("You cannot go to the next class but you can enter the exam");
} else {
  console.log("You can go to next class");
}

age = prompt("Your age is: ");

if (age < 18) {
  console.log("You cannot enter the cafe.");
} else if (age < 23) {
  console.log("You can enter the cafe but you cannot buy a drink");
} else {
  console.log("You can enter the cafe and buy a drink");
}

//? alternatively:
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

//! Ternary Operator
if (grade < 40) {
  console.log("You cannot go to the next class.");
} else if (grade >= 40 && grade < 45) {
  console.log("You cannot go to the next class but you can enter the exam");
} else {
  console.log("You can go to next class");
}

grade < 45
  ? console.log("You cannot go to the next class.")
  : console.log("You can go to next class");

var result = grade < 45 ? true : false;
console.log(result);

//! Switch Statements
var day;

switch (day) {
  case "saturday":
    console.log("I like saturday");
    break;

  case "monday":
    console.log("I don't like saturday");
    break;

  case "friday":
    console.log("I really like saturday");
    break;

  default:
    console.log("I don't know the day");
    break;
}

switch (true) {
  case grade < 40:
    console.log("You cannot go to the next class");
    break;
  case grade >= 40 && grade < 45:
    console.log("You cannot go to the next class but you can enter the exam");
    break;
  case grade >= 45:
    console.log("You can go to the next class");
    break;
}

var aG1 = 90;
var aG2 = 80;
var aG3 = 95;
var aAvg = (aG1 + aG2 + aG3) / 3;
console.log(`'Alex avg. grade: ${aAvg}'`);

var sG1 = 89;
var sG2 = 76;
var sG3 = 98;
var sAvg = (sG1 + sG2 + sG3) / 3;
console.log(`'Sarah avg. grade: ${sAvg}'`);

var nG1 = 89;
var nG2 = 76;
var nG3 = 98;
var nAvg = (nG1 + nG2 + nG3) / 3;
console.log(`'Sarah avg. grade: ${nAvg}'`);

if (aAvg > sAvg && aAvg > nAvg) {
  console.log(`'Alex has the highest avg. grade: ${aAvg}'`);
} else if (sAvg > aAvg && sAvg > nAvg) {
  console.log(`'Sarah has the highest avg. grade: ${sAvg}'`);
} else {
  console.log(`'Sarah has the highest avg. grade: ${nAvg}'`);
}
