
// Adding an attribute and setting its value
let para=document.querySelector("p");

console.dir(para);

para.setAttribute("id","para1");
console.log(para.getAttribute("id"));

// adding another attribute in the div tag

let div1=document.querySelector("div");

console.dir(div1);
// adding

div1.setAttribute("class","new_class");

// priting the attribute

let class_atr=div1.getAttribute("class");
console.log(class_atr);