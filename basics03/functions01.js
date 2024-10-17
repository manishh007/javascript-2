// function count(){
//     console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// } 

// count()

// function addition(num1,num2){
//      console.log(num1 + num2);
     
// }
// const res = addition(5, 6)
// console.log(res); // it shows undefined because console is a method to print it does not return anything



// function addition(num1,num2){
//      let res = num1 + num2
//      return res
     
// } 
// const res = addition(4, 6)
// console.log("result: " , res);

//anotherway

// function addition(num1,num2){
     
//      return num1 + num2
     
// } 
// const res = addition(4, 6)
// console.log(res);

// function welcome(name){
//     if(name === undefined){
//         console.log("naam likh le bhai");
//         return
        

//     }
//     return `Hi ${name} your most welcome`
// }

// console.log(welcome("Manish"));


// if we don't know how many parameters are to be given in the function
 
// function calcCartPrice (...num){
//     return num    

// }

// console.log(calcCartPrice(20, 30, 50));



// const user = { 
//     username: "manish",
//     keemat: 2999
// }

// function cartvalue(obj){
//     console.log(`username is ${obj.username} and keemar is ${obj.keemat}`);
    

// }
// cartvalue(user)


//**************for arrays ******************/

const user = [20, 30, 50, "manish"]

function callarray(getarray){
   /*  return getarray */
   console.log(getarray[3]);
   
}

callarray(user)