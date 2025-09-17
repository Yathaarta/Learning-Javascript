// ----------------------push vs concat vs spread---------------------------


//PUSH - for pushing a element at last does not extends list

const marvel_heros = ["spiderman","ironman","thor"]
const dc_heros = ["batman","superman","flash"]

marvel_heros.push(dc_heros)    // dc_heros arrays becomes last element as nested array
console.log(marvel_heros)   
marvel_heros.pop()             // restore to original


//CONCAT - joins two list into a new list does not extends existing lists

const all_heros = marvel_heros.concat(dc_heros)

console.log("\ncombined all_heros :" , all_heros)
console.log("marvel_heros:", marvel_heros)
console.log("dc_heros :" , dc_heros)

//SPREAD - combines any number of arrays into a new array (concat limited to combining only 2 arrays at once) 

const all_new_heros= [...marvel_heros, ...dc_heros, ...["shaktiman","naagraj"]]
console.log("\nall_new_heros :",all_new_heros)


// ----------------------flating an array-----------------------------

const a_nestedArr = [2,3,[4,5,[3,5,6]],6,[3,4],9,8,[4,3,2,[223,35,67,[123,56,73,[245,63,63,[345,73,732,773]]]]]]

const flatedArr = a_nestedArr.flat(Infinity)  //takes parameter how many nested level to flat, if give infinity flats all nesting

console.log(a_nestedArr)
console.log(flatedArr)


// -------------questionare methods (T/f) -------------------------

console.log(Array.isArray("Yatharth"))         //check if provided value/variable in parameter is of type array or not
console.log(Array.from("Yatharth"))         // make array from given data in parameter 
console.log()

// --extra
let score1=200
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3))
