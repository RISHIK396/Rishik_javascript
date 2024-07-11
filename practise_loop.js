// loop practisse
// printing the even numbers
let i=0;
while(i<=100){
    if(i%2==0){
        console.log(i);
    }
    i++;
}

let gameNum=25;
let userNum=prompt("enter the number to guess ");

while(userNum!=gameNum){
    alert("wrong input please try again");
    userNum=prompt("enter the number again: ");

}
alert("correct guess you have entered ")