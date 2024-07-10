// for loop 

for(let i=0;i<10;i++){
    console.log("hello world");
}

// the while loop
let sum1=0;
let i=0;
let n=prompt("enter the number till which you wanna calculate the sum: ")
while(i<=n){
    sum1+=i;
    i++;
}
console.log("the sum of first ",n," natural number is: ",sum1)

// for of loop
// in this we can use any variable as an iterator
let string1="javascript";
for(let i of string1){
    console.log(i);
}

// for in loop used usually for arrays and objects

let student={
    name:"RISHIK CHAUDHARY",
    age:20,
    cgpa:9.33,
    ispass:true,
};


for(let key in student){
    console.log("key",key,"value =",student[key]);
}

// do while loop
let z=0;
do{
    console.log("the number is :",z)
    z++;

}while(z=false);

// do while loop will run at least one as the condition will be checked at last

