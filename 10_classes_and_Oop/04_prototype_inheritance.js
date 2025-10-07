// Inheritance

const User = {
    name: 'Yatharth Pandey',
    email: 'example@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaliable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fulltime: true,
    __proto__: TeachingSupport       //inherit all the methods/properties of teaching support
}

// can also declare outside
Teacher.__proto__ = User

console.log(Teacher.email)           // email in user object accessible in teacher due to inheritance
console.log(TASupport.isAvaliable)   // same

// new syntax

Object.setPrototypeOf(TeachingSupport , Teacher)        // same as TeachingSupport.__proto__ = Teacher
console.log(TeachingSupport.makeVideo)
console.log(Teacher.isAvaliable) // undefined cause not inheritance


// ANSWER TO QUESTION IN PREVIOUS FILE 

let myName = 'Yatharth Pandey ';
let myPenName = 'Uttam     ';

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()
myPenName.trueLength()
"  random   ".trueLength()