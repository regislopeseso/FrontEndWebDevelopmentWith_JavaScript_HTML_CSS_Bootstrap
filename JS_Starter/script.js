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
