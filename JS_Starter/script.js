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
////? or;
// if (evenN % 2 === 0) {
//   console.log(evenN);
// }
// evenN++;
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
////?or

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

////?Compare
// sayName();
////? vs
// console.log(Name);

// function sayHi() {
//   let myWord = "Hi there";
//   console.log(myWord);
//   sayBye();

//   function sayBye() {
//     console.log(myWord);
//   }
// }

// sayHi();

//! Arrays

// //? Example 1
// var students = ["Sheldon", "Penny", "Leonard", "Raj"];
// console.log(students[0]);

// students[0] = "Amy";

// for (let student of students) {
//   console.log(student);
// }

// //? Example 2
// let mix = new Array();

// let gAc = 9.8;
// let m = 92;
// mix = [1, "Regis", false, [gAc, m]];

// for (let item of mix) {
//   console.log(item);
// }

//? Array Methods
var people = ["Sheldon", "Penny", "Leonard", "Raj"];

//? .push():
////? Adds a new element to the END of an array:

//in bad way:
//people[4] = "Bernadette";

//in good way:
// people.push("Bernadette");

// for (let person of people) {
//   console.log(person);
// }

//? .unshift():
////? Adds a new element to the BEGINNING of an array:

// people.unshift("Bernadette"); //Adds Bernadette to the beginning of people

// for (let person of people) {
//   console.log(person);
// }

//? .pop():
// //?Removes the element of the END of an array:
// people.pop(); //Removes "Raj" and returns the removed item

// for (let person of people) {
//   console.log(person);
// }

//? .shift():
////? Removes the element of BEGINNING end of an array:
// people.shift(); // removes "Sheldon" and returns the removed item

// for (let person of people) {
//   console.log(person);
// }

//? .indexOf()
// console.log(people.indexOf("Leonard")); // returns 2 which is the position 'Leonard' occupies in the array

//? .slice()
// this method won't change the original array
// it will rather created a new one out of it
// let friends = ["Ross", "Rachel", "Joey", "Chandler"];
// let couple = friends.slice(0, 2); // removes all elements after the position 2 and including it
// console.log(friends);
// console.log(couple);

// let allTheSame = friends.slice();
// console.log(allTheSame);

//* Array Quiz
// let books = ["Harry Potter", "The Hobbit", "Hunger Games", "Little Prince"];
// let films = [
//   ["hobbit1", "hobbit2", "hobbit3"],
//   ["matrix1", "matrix2", "matrix3"],
//   ["godFather1", "godFather2", "godFather3"],
// ];

// console.log(films[2][2]); // returns "godFather3"

//? Array interaction
// let colors = ["blue", "red", "green"];

// for (var i = 0; i < 3; i++) {
//   console.log(colors[i]);
// }

// //? or
// for (var color of colors) {
//   console.log(color);
// }

// //? or
// colors.forEach(function (color) {
//   console.log(color);
// });

//! Objects

// let student = new Object();

// let student = {
//   name: "Sheldon",
//   age: 36,
//   school: "calTech",
// };

//? accessing properties
//? 1rst way:
//console.log(student["name"]);
//? 2nd way:
//console.log(student.name);

// let schoolName = "school";
// let uniStudent = {
//   name: "Martin",
//   age: 19,
//   school: "Uni",
// };
// console.log(uniStudent[schoolName]); //this works because schoolName holds the 'school' it held something else like 'orange' it would not find a property belonging to the object uniStudent called 'orange' therefore it would not work.
//? 3rd way: using a constructor function:
// function Person(name, school, age) {
//   this.name = name;
//   this.school = school;
//   this.age = age;
// }

// let person1 = new Person("Leonard", "MIT", 32);

// person1.name = "Howard";

// console.log(person1);

//? Object Update
// let person = {
//   name: "",
//   school: "",
//   age: 0,
// };

// (person.name = "Leonard"), (person.school = "MIT"), (person.age = 32);

// console.log(person);

//? Complex Data Structure
// let blogPosts = [
//   {
//     title: "weather",
//     content: "it is rainy today",
//     likers: [
//       {
//         name: "John",
//         lastName: "Travolta",
//       }, // this is an object
//       {
//         name: "Frodo",
//         lastName: "Bagins",
//       }, // this is an object
//     ], // this is an array inside an object
//   }, // this is an object
//   {
//     title: "weather",
//     content: "It's so good that's raining",
//     likers: [
//       {
//         name: "Magnus",
//         lastName: "Carlsen",
//       }, // this is an object
//       {
//         name: "Friedrich",
//         lastName: "Wilhelm",
//       }, // this is an object
//     ], // this is an array inside an object
//   }, // this is an object
// ]; // this is an array

//console.log(blogPosts[0].title);
//console.log(blogPosts[1].likers[1].lastName);

// for (var post of blogPosts) {
//   console.log(post);
//   for (var liker of post.likers) {
//     console.log(liker);
//   }
// }

//? Object Methods // similar to class, class methods
// function Cube(height, width, depth) {
//   this.height = height;
//   this.width = width;
//   this.depth = depth;

//   this.getVolume = function () {
//     console.log(this.height * this.width * this.depth);
//   };
// }

// let myCube = new Cube(3, 4, 5);
// myCube.getVolume();

//? Class
// class Cylinder {
//   constructor(height, width, depth) {
//     this.height = height;
//     this.width = width;
//     this.depth = depth;

//     this.getVolume = function () {
//       console.log(this.height * this.width * this.depth);
//     };
//   }
// }

//! this. Keyword: always refers to the object it belongs if it's a generic function then it refers to window object which it the master object from which all objects derive
// function addNumber(x, y) {
//   console.log(x + y);
//   console.log(this);
// }
// addNumber(10, 20);

// let Raj = {
//   name: "Raj",
//   year: 1989,
//   sayHi: function () {
//     console.log(this);

//     function someFunc() {
//       console.log(this);
//     }
//     someFunc();
//   },
// };

// Raj.sayHi();

//sayHi is a method because it is a property of an object therefore "this" in this case refers to the object Raj
// someFunc is just a function and not a method therefore it does refer to the window object (global object).
