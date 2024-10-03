// objects 


//objects literals
const user1 = {
    name: "Manish",
    age: 18,
    location: "ghaziabad",
    "year" : "3rd",
    email: "manishpratap1703@gmail.com",
    lastLoginDays: ["sunday","tuesday"]

}

/* console.log(user1.name);
console.log(user1["location"]);
console.log(user1["year"]); */

// how to declare a symbol

const sym = Symbol("key")

const user2 = {
    name: "Mayank",
    [sym]: "mykey",
    location: "bulandshahr"

}

// console.log(user2[sym]);

/* we can simply update any values by just overwrite it by using = sign */

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
