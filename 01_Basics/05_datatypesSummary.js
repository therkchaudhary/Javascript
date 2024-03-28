// Primitive -->
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34356567878646546345n

// Reference (Non primitive) -->
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Rahul",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof myFunction);




//*******************************************************************
// Stack (Primitive), Heap (Non-Primitive)

let myName = "Rahulchaudhary"

let anotherName = myName
anotherName = "Chaudharyrahul"
console.log(myName)
console.log(anotherName);