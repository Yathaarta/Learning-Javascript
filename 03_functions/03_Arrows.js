// ===========================
// this in functions
// ===========================

const user = {
    username: 'Yatharth',
    price: 999,

    welcomeMessae: function () {                                //if use   welcomeMessage: () => {}  arrow function this. will be empty obj
        console.log(`${this.username}, welcome to website`)         //and console log will log undefined
        console.log(this)
    }
}

user.welcomeMessae()
user.username = "Sam"
user.welcomeMessae()

// In node this. is object in context and without any context this. is by default empty object, but in browser by default context is a window object
console.log(this) 

/*
 -- the context of this. is only an object so we cannot use this in a function which is not inside an object and can only user for keyval reference of object in which it is

*/

function example() {
    let username = 'Yatharth'
    console.log(this.username)
    console.log(this)

}
example()     //undefined 

const example3 = () => {         //arrow function
    let username = "uttam"
    console.log(this)
}
example3()


// ===========================
// Arrow Functions
// ===========================

// one way
const addTwo = (num1,num2) => {
    return num1+num2
}

// reduce to once line by using implicit return
const addTwo2 = (num1, num2) => num1 + num2

//or
const addTwo3 = (num1,num2) => (num1+num2)

console.log(addTwo(3,4),addTwo2(5,6),addTwo3(1,12))  // works all

// if want to return an object wrap in parenthisis
const add_totSal = (num1, num2) => ({
    total_sal: num1+num2,
    employee: "Yatharth"
})

console.log(add_totSal(2500,5000))

/*
In JavaScript, the fundamental difference in how this is handled between arrow functions and normal functions comes down to their binding behavior. A normal function's this is dynamically bound based on how it is called, while an arrow function's this is lexically bound, inheriting the value from its enclosing scope when it is created. example
*/
const obj = {
  name:'Rohit',
  arrowChangeName: (name) => {
    this.name=name
    console.log(this)
  },
  normalChangeName: function (name) {
    this.name=name
    console.log(this)
  }
}

obj.arrowChangeName('mohit')
console.log(obj.name)
obj.normalChangeName('mohit')
console.log(obj.name)

/*
Step 1: obj.arrowChangeName('mohit')
The arrowChangeName method is an arrow function.
Arrow functions do not bind their own this. Instead, they inherit the this value from their enclosing lexical (parent) scope.
In this case, the arrow function is defined in the top-level scope (the global scope), where this refers to the global object.
Executing this.name = name will create a new name property on the global object (e.g., the window object in browsers or global in Node.js), and assign it the value 'mohit'. It will not modify obj.name.
console.log(this) will log the global object, which now has a name property. 

Step 2: console.log(obj.name)
This line prints the name property of the obj object.
The arrow function in the previous step did not change obj.name, so it still holds its original value. 

Step 3: obj.normalChangeName('mohit')
The normalChangeName method is a standard function.
When a normal function is invoked as a method of an object (using the dot notation obj.normalChangeName()), its this value is dynamically bound to the object that owns the method—in this case, the obj object.
Executing this.name = name will change the name property of the obj object to 'mohit'.
console.log(this) will log the obj object itself.

Step 4: console.log(obj.name)
This line prints the name property of the obj object again.
This time, the value has been changed by the normal function call. */