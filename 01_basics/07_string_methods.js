// concatenation
repoCount = 2
Name = "Yatharth"
myString = "My name is " + Name+ ". I have " + repoCount + " repos in my GIthub"
console.log(myString)

// like fstring

console.log(`Hello my name is ${Name} and I have ${repoCount} repos in my GIthub`)

const gameName = new String("yatharthG")
console.log(gameName[2])  //2nd index of string in gameName

//how to use methods of strings (from all we see appearning on console when call a string)
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))  //char at index 3

/* In JavaScript, __proto__ is an accessor property that exposes an object's internal [[Prototype]] property. The [[Prototype]] is an internal slot that points to the object from which the current object inherits properties and methods.*/


//slice and substring 
const NewString = gameName.substring(0,4)  //if -ve number given at start still start from 0
console.log(NewString)
const NewString2 = gameName.slice(3,6) // also works for negative index if given in correct order try (-4,8), (-8,-2), (3,-1) etc

//trim spaces from end and start
const newString3 = "  Yatharth Pandey   "
console.log(newString3.trim())

//replace a part from string with something other
//eg url doesn't have spaces in its address but if given it is converted as %20 in the url to replace it with -
const urlEx = "https://yatharth.com/smart%20boy"
console.log(urlEx.replace("%20","-"))

//check includes or not
console.log(urlEx.includes("dumb-boy"))

//split string into two from where the given string in parameter is appering /returns list of splits
console.log(gameName.split('a'))
