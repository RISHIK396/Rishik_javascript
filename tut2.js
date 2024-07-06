console.log("hello world");
// alert("hello world");

// NOW WE WILL SEE COMMENTS IN JAVASCRIPT

// THIS IS A SINGLE LINE COOMMENT

/*THIS IS A MULTILINE COMMENT
WE CAN EXTEND IT AS I WISH 
ALSO AS SOON AS THE COMPLIER ENCOUNTERS A C
COMMENT IT SIMPLY IGNORES IT
*/



// NOW WE SEE OPERATORS IN JAVASCRIPT

let a=2;
let b=5;

console.log("the value of a+b is",a+b);
console.log("the value of a-b is ",a-b)
console.log(a/b);
console.log(a**b);
console.log(b%a);
console.log(b*a);

console.log("here using post increement",a++);
console.log("the value of a after post increment",a);
console.log("the of b bafter predecrement:",--b);

// now lets see the assignment operators

a+=1;
console.log(a)

a/=2;
console.log(a);

// -=,*=,**=,%=,

// comparisions operators in javascript

console.log(a>b);
console.log(b>a);
console.log(a==b);


name1="tony stark";
name2="rishik chaudhary";

console.log(name1," and ", name2);

console.log(name1>=name2);

num1="4";

// this == will only check the value of the insinde the variables not the datatype which they are using

console.log(num1==b);

// now to check the datatype also we will use the === i.e equals and type

console.log(num1===b);

console.log(num1!==a);
// it also comes in ===,!==,>==,<==,

// now seeing logical operators in javascript 

// false
console.log(false && true);

console.log(true || flase);
console.log(1 && 0);

console.log(!false);