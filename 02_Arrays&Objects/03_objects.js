// Object literals

// when defining key if " " of string not used it is still considered string, but have to explicitly use it when key contains spaces in name
// when trying to use Symbol as key, is will be treated as a fresh key but not a symbol, to it be recognized as symbol enclose key in []

// to add another key value in object just use       Object_name.new_key/["new_key"] = value
const mySym = Symbol("s_key")


const JsUser = {
    name:"Yatharth",
    age:19,
    location:"Mumbai",
    email:"yatharth@gmail.com",
    [mySym]: "s_key2",
    isLoggedin: false,      
    "full name":"Yatharth Pandey"      //if key value has space we have to use string declaration other are also string only even without ""
}

JsUser["added_key"] = "I am added externelly"

// two ways to access the values using key 
// 1st: use   Object_name.key    (cannot use if key is containing space or key is a symbol)
console.table([JsUser.email, JsUser.age, JsUser.location, JsUser.name, JsUser.isLoggedin])

// 2nd: use   Object_name["key"]      (usable in all context)
console.table([JsUser["full name"], JsUser[mySym], JsUser["age"]])

console.log(JsUser[mySym])  //symbol
console.log(JsUser.mySym)  //undefined


// can freeze a object so it becomes immutable

JsUser.email = "yatharth@yahoo.com"   //this becomes email
//Object.freeze(JsUser)               //uncomment to see working
JsUser.email = "yatharth@google.com"   //but this doesn't cause freeze used
console.log(JsUser.email)


// can add functions in objects too

JsUser.greeting = function() {                                      //freeze is commented so this can work
    console.log(`Fuction called therefore this prints, this function is made by ${this.name}`)           
     //when called greeting in Jsuser this will print
}

console.log(JsUser.greeting())       
// the undefined is also logged cause function doens't return anything it does console log try changing console.log to return