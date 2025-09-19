// ====================================================
// Immediately Invoked Function Expressions (IIFE)
// ====================================================

/*
1. Uses two parenthesis  eg. () ();
2. The first parenthiesis is where function defination goes
3. the second parenthesis is executioner parenthesis so don't need to call it
4. the parameters can be given in executioner method to execution function with arguments as given parameter
5. It is necessary to end iffe parenthesis with semicolon as it is denothing the closure of context for IIFE

6. Iffe is used because sometime variables , declarations etc of global scope can cause pollution in function scope
to remove such pollutions from functions iffe is used.
*/


// (function def) (parameter);
(function hello() {
    console.log('Hello World')
}) ();


// arrow func in iffe
( () => {
    console.log("Hello World thru Arrow Iffe func")
}) ();


// with parameter
((namee) => {
    console.log(`hello world by ${namee}`)
}) ("Yatharth");