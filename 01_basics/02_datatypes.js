"use strict" //treat all js code as of implementing newer version of node

//alert(3+3)   we are using nodejs, not browser therefore error, otherwise alert message on browser 6

let name = "Yatharth"
let age = 19
let isAdult = true
let address;
let education = null;

//used to log to console the type of the given parameter
console.log("name:", typeof "Yatharth")
console.log("age:", typeof age)
console.log("education:", typeof education)      //object not datatype
console.log("address: "+ typeof address)

/* 
-------------- datatypes of above -----------------
String -> "";  anything btw double quotes
Number -> 78;  anynumber btw -+ 2 power 53, assing int or float but internally sotred as floating-point format
bigInt -> to represent arbitrarily large integers 
boolean -> true/false;  binary values
Undefined ->  only variable declared no value assignment
null ->  standalone value used for assignment when no value is there to assign but also not left variable undefined
*/

