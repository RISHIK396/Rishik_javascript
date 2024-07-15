let heros=["hanuman","ironman","shaktiman","hulk"];

// will calculate the number of elements in the array
console.log(heros.length);

// will print the type of or datatype of any variable or data object 
console.log(typeof heros);

let num1=26;
console.log(typeof(num1));

let arr1=[10,20,30,40,50,60,70,80,90,100];

// printing the element of an array at a particular index
// here values are accesed with the help of keys i.e indexes

console.log(arr1[3],arr1[6],arr1[8]);

console.log(arr1.length);
/* cannot store this 11 element as we have already requested for the particular block of memory
 so at this point we cannot extend it as the next memory location must have been given to some other process by the compiler*/

arr1[10]=110;

// will print undefined
console.log(arr1[11]);

// arrays are mutble datatype

arr1[3]=45;

console.log(arr1);

console.log(arr1[10]);

// looping in arrays
for(let i=0;i<arr1.length;i++){
    console.log(`the ${i+1} element is ${arr1[i]}`);
}

let i=0;
while(i<arr1.length){
    if(arr1[i]==45){
        continue;
    }
    console.log(arr1[i]);
    i++;
}

