//array

const myArr = [ 1, 2, 3, 4, 5]
const heros = ["bheem", "naagshakti"]

const arr2 = new Array(1,2,3,4)
// console.log(myArr[4]);

myArr.push(7)
// console.log(myArr);


/* myArr.unshift    ye shuru mein add karega element
myArr.shift   ye sabse pehle element ko hata dega 
myArr.pop   ye sabse last element ko hata dega */

// console.log(myArr.includes(5));    /* gives boolean true or false that the element is present in array or not. */
// console.log(myArr.includes(8));    

// console.log(myArr.indexOf(1));
// console.log(myArr.indexOf(0));     /*gives the index of element in the array starts from 0 and -1 for not available  */


const newArr = myArr.join()   /* join the array and convert the data type to string */

// console.log(newArr);

// slice   vs   splice

// const a1 = [2,4,6,8,10,12,14,16]
// console.log("org array : ",a1);

// const s1 = a1.slice(2,5)
// console.log(s1);
// console.log("after slice : ",a1);


// const s2 = a1.splice(2,5)
// console.log(s2);
// console.log("after splice",a1);

const a1 = [2,4,6,8,10,12,14,16]
console.log("org array : ",a1);

const s2 = a1.splice(2,3)
console.log(s2);
console.log("after splice",a1);


const s1 = a1.slice(0,1)
console.log(s1);
console.log("after slice : ",a1);

/* slice : ye original array ko bina edit kare jahan se jahan tak array chaiye usko print ya delete karta hai , index is like slice(staring index,last index )

splice : ye original array ko edit kar deti hai as splice(starting index, no. of element including start one)*/





