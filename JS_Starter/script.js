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

alert("This is a popup window, the content of the variable job is: " + job);
job = prompt("the new content should be: ");
console.log(job);

// Basic operators:
let a, b, c;

//Add and Dif: +, -
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

//Multiplication and Division: *, /
c = a * b;
console.log(`c = a * b = ${a} * ${b} = ${c}`);
c = a / b;
console.log(`c = a / b = ${a} / ${b} = ${c}`);

//Logical operators: >, >=, <, <=
c = a > b;
console.log(`a > b ? ${c}`);
c = a <= b;
console.log(`a <= b ? ${c}`);
a = 10;
b = -10;
console.log(`a == b ? ${a == b}`);
console.log(`a === b ? ${a === b}`);
