// ===========================
// this in functions
// ===========================

const user = {
    username: 'Yatharth',
    price: 999,

    welcomeMessae: function () {                                //if use   welcomeMessage: () => {}  arrow function this will be empty obj
        console.log(`${this.username}, welcome to website`)         //and console log will log undefined
        console.log(this)
    }
}

user.welcomeMessae()
user.username = "Sam"
user.welcomeMessae()

// In node this is object in context and without any context this is by default empty object, but in browser by default context is window
console.log(this) 

/*
 -- the context of this. is only an object so we cannot use this in a function which is not inside an object and can only user for keyval reference of object in which it is
 -- also this inside a function which in not inside an object the contex is not empty object but for arrow functions which are not inside
*/

function example() {
    let username = 'Yatharth'
    console.log(this.username)

}
example()     //undefined but this.username 

const example2 = function() {
    let username ="yath"
    console.log(this)
}
example2()

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