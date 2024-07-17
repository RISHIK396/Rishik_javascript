array1=["j","a","v","a"," ","s","c","r","i","p","t"];
str1=array1.toString();
console.log(array1);

// will convert the array into string 
console.log(str1);

arr1=[10,20,30,40,50,60];
arr2=[70,80,90,100,110];

// to join 2 arrays 
arr3=arr1.concat(arr2);
console.log(arr3);

// to add a new element in the starting of an array we use unshift function
arr1.unshift(0);
console.log(arr1);
// to delete an element from the strating of an array we use shift method
arr1.shift();
console.log(arr1);

// to acces a part of array we will use slice method
console.log(array1.slice(0,4));

console.log(arr1.slice(3,9));

// now to delete an array or to replace some elemnts in the array we will use the splice method

arr2=[1,2,3,4,5,6,7,8,9];

arr2.splice(0,2);
console.log(arr2);

arr2.splice(2,1,90);
console.log(arr2);