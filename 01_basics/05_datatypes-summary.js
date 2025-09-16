// primitive datatypes

// 7 types- String, Number, Boolean, null, undefiend, Symbol, BigInt

const score= 100                               //number
const scorevValue = 100.3                      //number

const loggedIn=false                           //boolean
const outsideTemp = null                       //null
let userEmail;                                 //undefiend

let id = Symbol('123')
let anotherId =Symbol("123")         //both same data but due to Symbol both are different

console.log('123'=='123')          //true
console.log(id == anotherId)     //false casue different symbols

const bigNumber = 2345432134254536453452345n        //n at last means treat as bigInt not Number

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["naagraj", "chacha chaudhary", "doga"]
let myObj = {
    name:"uttam",
    age:19
}

const myFunction = function() {
    console.log("Heloo World from inside the function")
}

console.log(typeof bigNumber)
console.log(typeof abc)         //same for userEmail undefined
console.log(typeof outsideTemp)  //null type of object
console.log(typeof anotherId)    //symbol
console.log(typeof myObj)       //array also object
console.log(typeof myFunction)     //function type of function object