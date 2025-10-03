const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
// we are working in same context hence this is changed by user2 then, user1 is also changed
const user1 = User("Yatharth", 12, true)
const user2 = User("Uttam", 11, false)
console.log(user1)          //overwritten by user2 values

// we can invoke constructor function using operator new, and create a new instance of object
const userOne = new User("Yatharth", 12, true)
const userTwo = new User("Uttam", 11, false)
console.log(userOne.constructor);
console.log(userOne);


//instanceof similar like typeof used to if an object instanceof an class or function
console.log(userOne instanceof User)
