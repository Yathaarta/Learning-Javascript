function setUsername(username) {
    //complex DB class
    this.username=username;
    console.log('called')
}

function createUser(username, email, password) {
    setUsername(username)               // this will refer to global object and not setUsername function context cause there is no object

    setUsername.call(this, username)          // this will refer to createUser function context
    // call method does 
    
    this.email= email;
    this.password = password;
}

const user1 = new createUser('uttam', 'example@gmail.com', '123')
console.log(user1)
console.log(global.username)  