function mutiplyBy5(num) {
    return num*5;
}

mutiplyBy5.power = 2;

console.log(mutiplyBy5(5))
console.log(mutiplyBy5.power)    // arrey function or object?
console.log(mutiplyBy5.prototype)


function createUser(username, score) {
    this.username =username
    this.score = score 
}

createUser.prototype.increment = function() {
    this.score++
}

createUser.prototype.printMe= function() {
    console.log(`score is ${this.score}`);
}

const uttam = new createUser('uttam', 20)
const yatharth = createUser('yatharth', 250)


// javascript is a prototype based language
// every function in javascript has a property called prototype
// prototype is an object which has a constructor property which points to the function itself
// when calling a method on an object, javascript looks for the method in the object itself
// if not found, it looks in the prototype of the object
// if not found, it looks in the prototype of the prototype and so on
// this is called prototype chain

uttam.increment()
uttam.printMe()
// yatharth.increment()
// yatharth.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/