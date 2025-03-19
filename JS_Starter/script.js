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
