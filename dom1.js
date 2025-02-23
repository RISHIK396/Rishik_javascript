console.log("hello world");

alert("this is an introduction to DOm manuplation");

const heading = document.getElementById("heading1");
// console.dir(heading);

heading.innerText="THE FIRST PAGE OF MY INDEX";

let div_parent = document.getElementById("div1");
div_parent.childNodes[1].innerText = "THIS IS A TEXT ";
let txt = div_parent.childNodes[1];
txt.style.backgroundColor = "black";
txt.style.fontSize = "30px";
txt.style.height = "70px";

let para = document.querySelectorAll(".Text");
// para.innerText = "Text of the world script";
para[1].style.backgroundColor = "orange";

let div2 = document.createElement("div");
let divvy =  document.getElementsByTagName("body");
divvy.append("div2");
divvy.innerText = "this is  a property of dom through which i have added a new tag at the end of the page";

