let score=prompt("enter the marks for which grades will be provided");

if(score>=90 && score<=100){
    console.log("Your grade is A");
}

else if(score>=70 && score<=89){
    console.log("your grade is B");
}

else if(score>=60 && score<=69){
    console.log("your grade is C");

}

else if(score>=50 && score<=59){
    console.log("your grade is D");
}

else{
    console.log("your garde is E");
}