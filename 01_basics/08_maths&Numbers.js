// Javascript is a dynamic typed language so it will define type automatically seeing the value given to variable but we can also explicitly define the type of the variable

// The fundamental difference is that score is a primitive number type, while score2 is a Number object. This distinction in their data types is why console.log displays them differently.

const score= 400
const score2= new Number(100.459)
console.log(score)
console.log(score2)

//--------------METHODS ON NUMBERS-----------------------

// for more look in mdn or console methods
// for how many digits should be after decimal if more round of to less digits if less add zeros after decimal
console.log(score2.toFixed(2)) 
console.log(score.toFixed(2))

// precision is how precise number should be if overall no digit after + before decimal more than given paramenter then round off to get only till given no. of digit if possible, if not possible (only when no of digits before decimal are more than given parameter no.) uses expnential representation to get to given digits.
// If total digits less then add zeros after decimal to get required no. of precisino digits. But if, no. of digits 
const score3 = 123.8977
console.log(score3.toPrecision(2))    //try 2 4 6 8

// use toString to turn in no. into string if decimal in no. it also becomes . character in string so if do length of string it also counts
console.log(score3.toString() +" : lenght of string is " + score3.toString.length)


// toLocaleString ; to represent number in comma based currency system can use parameter 'en-UN' to use system of million, billion , use 'en-IN' to see 100 thousand system by default lakh, crore by default it is what your node.js setting configured mine to en-IN
const score4 = 1000000
console.log(score4.toLocaleString('en-US'))


//------------------------MATHS----------------------------------

// for all look at the console methods listed or mdn
// abs is used to to convert any no. to positive sign 
console.log(Math.abs(-4), Math.abs(4))

// round is used to round of a number to closest integer i.e without decimal 
// we can use .ceil or .floor with to make it round always to floor integer value or celing integer value
console.log(Math.round(4.28))
console.log(Math.ceil(4.28))
console.log(Math.floor(4.28))

// min and max used to find max and min number in array 
console.log(Math.min(2,4,6,8))
console.log(Math.max(2,4,6,8))


// random is used it generates random value in range [0,1) i.e it can geneate random no. in range between 0 and 1 including 0 but never 1 
// it doen not take range therefore if we want to generate random no. between any range of own choice we use below given formula 
// Math.floor(Math.random() * (max-min+1)) + min;  

console.log(Math.random())

const min = 15
const max = 25
console.log(Math.floor(Math.random() * (max-min+1)) + min)
