//======================
// nested accesing
//======================

const regularUser = {
    email: "some@gmail.com",
    names: {
        userfullname: {
            firstname: "Yatharth",
            middlename: null,
            lastname: "Pandey"
        },
        username: "YatharthP343"
    }
}

console.log(regularUser.names.userfullname.firstname.substring(4,7))



//===============================================
// assign and spread methods
//===============================================

/* ASSIGN

objects assign method - Object.assign(target,source)   extends target object's key:value pairs by those of source object's

can use multiple source also all assign into 1st parameter target object here empty obj, and better to use empty object and save it in new var, all source remain same 
*/

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}
const obj3 ={4:"e", 5:"f"}

const final_target = Object.assign({}, obj1, obj2, obj3)       //only combines unique keys, therefore 4:d not final target cause 4:e was assigned before it, obj1 ,2 ,3 same as before
console.log("empty obj (final_target) after assign obj1,2,3:" ,final_target)


Object.assign(obj3,obj1)                  //if target and soucrce are same obj no assigment happens cause same memory reference
console.log("obj3 after assign with obj1:" ,obj3)




/* SPREAD

spread use same as like for arrays, more used than assign
*/

const final_spreading = {...obj1, ...obj2, ...obj3}       //only combines unique keys cause obj3 already had obj1's keyval
console.log("combined thru spread:", final_spreading)


//==================================================
// Objects keys and values, questionare methods
//==================================================

const users = [
    {
        id:1,
        email:"user1gmail.com",
    },
    {
        id:2,
        email:"user2gmail.com",
    },
    {
        id:3,
        email:"user3gmail.com"
    }
]

console.log(users[1].email)
console.log(Object.keys(obj3))     // returns array of keys
console.log(Object.values(obj3))  //returns array of values in given obj
console.log(Object.entries(obj3))   //returns entries as array of arrays of keyval each key like [key, value] 


console.log(regularUser.hasOwnProperty("isLogged"))      //checks if given key exists in object
