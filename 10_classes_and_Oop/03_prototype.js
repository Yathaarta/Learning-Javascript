let myName = 'Yatharth Pandey ';
let myPenName = 'Uttam     ';

// we want a method lets say .truelength , that reveals the length of the string removing preceeding or prevailing spaces
// we don't want to use trim, and want a new method of our own          // soln in next file prototype_inheritance
console.log(myName.trim().length)


// both myHeros and heroPower are objects cause in javascript, arrays are objects
// arrays inherit from Array.prototype
// objects inherit from Object.prototype
// when we add a method to Object.prototype, it is available to all objects and arrays
// this is called prototype chaining

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor:'hammer',
    spiderman: 'sling',

    getSpiderPower: function() {
        console.log*(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.uttam = function() {
    console.log('Uttam is present everywhere')
}

Array.prototype.heyUttam = function () {
    console.log('Uttam says hello')
}

heroPower.uttam()    //.uttam now present in all objects prototype
myHeros.uttam()
myHeros.heyUttam()     //.uttam only present in array objects
// heroPower.heyUttam()

