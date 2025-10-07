// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const uttam = new User("uttam", "uttam @gmail.com", "123")

console.log(uttam.encryptPassword());
console.log(uttam.changeUsername());

// behind the scene

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User2("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());