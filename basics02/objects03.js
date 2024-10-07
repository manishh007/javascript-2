/* // objects 


//objects literals
const user1 = {
    name: "Manish",
    age: 18,
    location: "ghaziabad",
    "year" : "3rd",
    email: "manishpratap1703@gmail.com",
    lastLoginDays: ["sunday","tuesday"]

}

//  console.log(user1.name);
// console.log(user1["location"]);
// console.log(user1["year"]); 

// how to declare a symbol

const sym = Symbol("key")

const user2 = {
    name: "Mayank",
    [sym]: "mykey",
    location: "bulandshahr"

}

// console.log(user2[sym]);

//  we can simply update any values by just overwrite it by using = sign 

user1.location = "bulandshahr"
// console.log(user1); 
Object.freeze(user1)     //using free we cannot update or overwrite the values of any abject

user1.location = "delhi"
// console.log(user1);

// console.log(user2);



user2.greeting = function(){
    console.log("hii, how are you?");
    
}

// console.log(user2. greeting());

user2.namaste = function(){
    console.log(`hii, how are you?, ${this.location}` );
    
}
console.log(user2.namaste());


 */

// ****************************************more about objects*********************************

const instaUser = new Object()  //singleton object
// console.log(instaUser);

const instaUser2 = {
    email: "abc@gmail.com",
    fullname: {
        userfullname:{
            firstname: "manish",
            lastname: "lodhi"

        }
    }
}
// console.log(instaUser2);    //non-singleton object

instaUser.id = "1122"
instaUser.name = "mann"
instaUser.isLoggedIn = true

// console.log(instaUser);
// console.log(instaUser2);
// console.log(instaUser2.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1,obj2} 
const obj4 = Object.assign({}, obj1,obj2)  //here we write {} so to put all the assigned result to the empty object
// console.log(obj3);
// console.log(obj4);

//best method to merge object/
const obj5 = {...obj1, ...obj2}    //spread and conbine 
// console.log(obj5);

// console.log(Object.keys(instaUser));   //print only keys 
// console.log(Object.values(instaUser));   //print only values
// console.log(Object.entries(instaUser));   //put keys and values in a array inside a array


// ****************************destructuring of objects*******************************

const abesit =  {
    faculty: "okok",
    infra: "good",
    environment: "worst"
}

const{environment : envo} = abesit
console.log(envo);








 





