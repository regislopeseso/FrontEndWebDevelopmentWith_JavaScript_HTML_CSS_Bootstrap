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

//! let divToManipulate = document.querySelector(".background");

//! STYLE MANIPULATION
//! divToManipulate.style.height = "50px";
//! divToManipulate.style.width = "400px";
//! divToManipulate.style.backgroundColor = "red";
//! divToManipulate.style.fontSize = "red";
//! divToManipulate.style.border = "5px solid black";

//! CLASS MANIPULATION
//! divToManipulate.classList.add("addClass");
//! divToManipulate.classList.remove("addClass");
//! divToManipulate.classList.toggle("addClass");

//! let paragraph = document.querySelector("#oakParagraph");

//! CONTENT MANIPULATION
//! .textContent extracts all the content inside two html tags
//! HOWEVER, it ignores the html elements inside (for instance if there is an <strong>this is a bold text<strong>, the bold effect will be lost).
//! Because it returns a string.
//! console.log(paragraph.textContent);
//! paragraph.textContent = "OAK Academy is the best academy, really";

//! .innerHTML extracts all the content inside two html
//! AND allows us to reproduce elements.
//! Because it returns html.
//! console.log(paragraph.innerHTML);
//! paragraph.innerHTML =
//! "OAK Academy is the <strong>best</strong> academy, really is great";

//! ATTRIBUTES MANIPULATION
//! let myLink = document.querySelector("a");
//! console.log(myLink.getAttribute("href"));

//! console.log(myLink.setAttribute("href", "https:/google.com/"));

//? EVENT HANDLERS
//? The process is: select and add ...
//? CLASS 172. INTRODUCTION TO EVENT Handlers
//? let button = document.querySelector("#btn1");

//? let title = document.querySelector("#OAKTitle");

//? button.addEventListener("click", function () {
//?   console.log("You clicked the button");
//?   title.style.backgroundColor = "red";
//? }); //the function () here is called a call back function

//* CLASS 173. EVENT HANDLER CODEQUIZ-1

//* let listParent = document.querySelector("ul");
//* listParent.addEventListener("click", function () {
//*   console.log("You clicked the ul");
//*   listParent.style.backgroundColor = "blue";
//* });

//* let listItems = document.querySelectorAll("li");

//* for (var i = 0; i < listItems.length; i++) {
//*   listItems[i].addEventListener("click", function () {
//*     this.style.color = "white";
//*   });
//* }

//! CLASS 175. CALLBACK FUNCTION
//! let oakParagraph = document.querySelector("#oakParagraph");

//! function toggleBackground() {
//!   oakParagraph.classList.toggle("toggleBackground");
//! }

//! oakParagraph.addEventListener("click", toggleBackground;
//// oakParagraph.addEventListener("click", toggleBackground());
//! Although toggleBack is a function, here it is not written with parenthesis,
//! and that makes it a callback function this is done so
//! because it is not desired that the functions activates when the page is loaded
//! but when the p tag be clicked.

//? 177. Todo List Quiz Solution
let todoItems = document.querySelectorAll(".todoItem");

for (let item of todoItems) {
  item.addEventListener("mouseover", function () {
    item.style.backgroundColor = "blue";
    item.style.color = "white";
  });

  item.addEventListener("mouseout", function () {
    item.style.backgroundColor = "white";
    item.style.color = "red";
    item.innerHTML = "<s> Go to school <s>";
  });
}
