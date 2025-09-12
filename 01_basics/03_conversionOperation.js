let score1 = "23"
let score2 = "23abc"
let score3 = null
let score4 = undefined
let score5 = true  
let score6 = 1           //try putting other numbers, 0, null, undefined, any string, empty stirng, etc and check output

console.table([typeof score1, typeof score2, typeof score3, typeof score4, typeof score5, typeof score6])

score1 = Number(score1)
score2 = Number(score2)
score3=Number(score3)
score4 = Number(score4)
score5 = Number(score5)
score6 = Boolean(score6)

console.table([typeof score1, typeof score2, typeof score3, typeof score4, typeof score5, typeof score6])
console.table([score1, score2, score3, score4, score5, score6])

//Nan (Not a Number) - but type is (Number) returned when try to convert string non-convertible to number into a number or undefined into Number

//0 - either when converting a string like "0" or null value into Number

//0 or 1 - when converting boolean value into Number True - 1 and false -0

