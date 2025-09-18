// array

const myArr = [0,1,2,3,4,5,6,7]
const myArr3= new Array(1,2,4)
const myArr2 = ["shaktiman","naagraj","doga", 13, myArr3] //array is collection of items of same types or different types, of objects, variables ,etc

console.table([myArr,myArr2,myArr3])

// array methods

console.log("myArr :", myArr)

myArr.push(80)      
myArr.push(90)      
myArr.pop()       //like python .pop(0) doesnt pop from start still pop from last
console.log("after push 80,90 and pop once: " ,myArr)

myArr.unshift(10)       //unshift means insert elem at start by shifting each element one index right side
console.log("unshift 10: ", myArr)

myArr.shift()           //shift means remove elem at start by shifting each element one index left
console.log("shift : ", myArr)

console.log(myArr.includes(8))
console.log(myArr.indexOf(3))      //if index of non existant element asked returns -1

const newArr = myArr2.join()            //converts to array into string representation with each element comma seperated and removed nestings 
console.log("value:",newArr, " type:", typeof newArr)

// slice and splice

console.log()
console.log('original list:' , myArr);

const myn1 = myArr.slice(1,4)
console.log("sliced list:", myn1)         //sliced list from index 1 till 3 stored in myn1
console.log("original list:" , myArr)       //original list stays same

const myn2 = myArr.splice(1,4)           //sliced list from index 1 till 4 stored in myn1
console.log("sliced list:", myn2)          // sliced part removed from original list , called spliced
console.log("original list:", myArr)
