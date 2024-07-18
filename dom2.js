// will pause the whole functionality of the website till we click on ok.

// alert("hello");

console.log("hello");
window.console.log("hello2");
console.dir(window.document.body.childNodes[1])

//NOW MAUPLATING THE DOM WITH THE HELP OF ID

// WHEN WE NEED UNIWUENESS WE USE ID

let heading1 = document.getElementById("heading");

// will print the text which is written in bettween the tags
console.dir(heading1.innerText);

// second way of dom manuplation is with help of class 

let class1= document.getElementsByClassName("one");

// will return an html collection-ARRAY of tags
console.dir(class1);

let headin2= document.getElementsByClassName("haed1")

// in this 0 collection will be returned
console.dir(headin2);

// in this empty array will be returned
console.log(headin2)

// with the help of query selector

// it will return the first element with this class

// also innerText property can be applied to only one element
let class3= document.querySelector(".one");
console.dir(class3.innerText);

// to return all the elemets with this class 

let class4= document.querySelectorAll(".one");
console.dir(class4);

let div= document.querySelector("div");
// will print all info for the first div tag occured in the browser
console.dir(div);

// will print all the elements text in the div tag
console.dir(div.innerText);

// will print teh text along with the exact HTML INFO
console.dir(div.innerHTML);

// THIS WILL CHANGE THE HEADING ON THE WEB PAGE
heading1.innerText="NEW HEADING"

// THIS CAN MAKE CHANGES IN THE HTML TAGS
heading1.innerHTML="<i>THIS IS A NEW HEADING</i>";

let head12=div.firstChild;
console.dir(div.firstChild.textContent);