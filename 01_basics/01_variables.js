const accountID = 1234
let emailID = "yatharth@gmail.com"
var accountPasswd = "mahanAdmi1234"
accountCity = "Lucknow"

//accountID = 2
//console.log(accountID)                            raises error cause accountID is constant variable 

emailID = "yatharth@yahoo.com"
accountPasswd = "bekarAdmi4321"
accountCity = "Kanpur"

console.table([accountID, emailID, accountPasswd, accountCity])


/* 
-------- const --------

const declares a variable with a constant reference. This means the variable cannot be reassigned to a new value after it's been declared.

Meaning: Use this when you declare a variable that you don't plan on changing.

Scope: Block-scoped. The variable only exists within the curly braces {} it was declared in (e.g., inside an if statement or a for loop).

Usage: This should be your default choice. It makes code more predictable and prevents accidental changes.



-------- let --------

let declares a re-assignable, block-scoped variable.

Meaning: Use this when you know a variable's value will need to change, like a counter in a loop.

Scope: Block-scoped, just like const.

Usage: Ideal for loop counters, or any variable that needs to be updated within its scope.



-------- var --------

var is the original way to declare variables in JavaScript and has some quirky behaviors that can lead to bugs.

Meaning: The old way of declaring a variable.

Scope: Function-scoped. It does not respect block-scope ({}). A var declared inside a loop is accessible outside of it.

Hoisting: var declarations are "hoisted" (lifted) to the top of their function scope. This means you can reference a variable before it's declared, and its value will be undefined.

Usage: You should avoid using var in modern JavaScript in favor of let and const. You'll mainly see it in older codebases or tutorials.



-------- No Keyword (Implicit Global) --------

Assigning a value to a variable without declaring it first is a bad practice that creates a global variable.

Meaning: This is usually a typo or a mistake.

Behavior: When you assign to an undeclared variable, JavaScript walks up the scope chain looking for it. If it doesn't find it, it creates a new property on the global object (window in browsers).

When you assign a value to a variable without a keyword, it becomes a global variable. It doesn't live in a block or a function; it lives everywhere in your entire program. This is like shouting in a crowded city square—everyone, everywhere can hear you and be affected by what you say.

This is dangerous because any other part of your code (even other scripts running on the same page) can accidentally read or, worse, change that variable, leading to unpredictable bugs.

Usage: Never do this intentionally. It pollutes the global namespace and can cause hard-to-find bugs where any part of your code can accidentally change any other part. Using "use strict"; at the top of your files will turn this into an error. */