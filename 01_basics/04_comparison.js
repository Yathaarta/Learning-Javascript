// know normal comparisons

// console.log(2 >= 1)
// console.log(2 > 2)
// console.log(2 == 2)
// console.log(2 < 1)
// console.log(2 <= 1)

//but javascript also uses automatic conversion when comparing different datatypes but the result this way is not predictable hence these types of comparisons are not preffered 

//working example

console.log(2 == "2")
console.log(2 > "01")  

//unpredicatable examples

console.log(null == 0)  //false
console.log(null > 0)   //false
console.log(null < 0)   //false
console.log(null >= 0)  //true    why? hence unpredicatable


console.log(undefined == 0)  //false
console.log(undefined > 0)   //false
console.log(undefined < 0)   //false
console.log(undefined >= 0)  //false  why not same as null?  hence unpredicatable