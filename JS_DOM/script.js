//? CLASS 167. SELECT AND CHANGE
//? let h1Element = document.querySelector("h1");

//? h1Element.style.color = "blue";

//? let isYellow = false;

//? let bodyElement = document.querySelector("body");

//? setInterval(function () {
//?   if (isYellow === true) {
//?     bodyElement.style.background = "white";
//?   } else {
//?     bodyElement.style.background = "yellow";
//?   }
//?   isYellow = !isYellow;
//? }, 500);

//* CLASS 168. SELECT METHODS
//* document.getElementById()
//* document.getElementsByClassName()
//* document.getElementsByTagName()

//* document.querySelector()
//* >Returns only 1 element: the first!
//* >the parameter must be passed as css notation
//* >>if a class: document.querySelector(".className")
//* >>if an id: document.querySelector("#idName")
//* >>if a tag: document.querySelector("tagName")

//* document.querySelectorAll()
//* Works the same but returns all elements

//* let selectWithId = document.getElementById("oakParagraph");
//* console.log(selectWithId);

//* let selectWithClass = document.getElementsByClassName("background");
//* console.log(selectWithClass);

//* let selectWithTag = document.getElementsByTagName("h1");
//* console.log(selectWithTag);

//*

//* selectWithQueryId = document.querySelector("#oakParagraph");
//* console.log(selectWithQueryId);

//* selectWithQueryClass = document.querySelector(".background");
//* console.log(selectWithQueryClass);

//* let selectWithQueryTag = document.querySelector("h1");
//* console.log(selectWithQueryTag);

//* let selectWithQueryAllClass = document.querySelectorAll("h1");
//* console.log(selectWithQueryAllClass);

//! CLASS 169. MANIPULATION METHODS
//! 1. Changes the style of an element
//! 2. Adds and/or removes classes
//! 3. Changes the content of an element
//! 4. Changes attributes (ex.: reference of a src="...")

let divToManipulate = document.querySelector(".background");

//! divToManipulate.style.height = "50px";
//! divToManipulate.style.width = "400px";
//! divToManipulate.style.backgroundColor = "red";
//! divToManipulate.style.fontSize = "red";
//! divToManipulate.style.border = "5px solid black";

//! divToManipulate.classList.add("addClass");
//! divToManipulate.classList.remove("addClass");
divToManipulate.classList.toggle("addClass");
