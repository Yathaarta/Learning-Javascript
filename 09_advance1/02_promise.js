const promiseOne = new Promise(function(resolve, reject){
    //can do an async task
    // db calls, crptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()  //try commentingfff
    },1000)
})

// To consume the promise, call resolve() inside the function passed to the Promise constructor.
// The promise can only be consumed with .then() after it has been resolved.
// This ensures that the asynchronous task is completed before executing the .then() handler.

promiseOne.then(function(){
    console.log('promis consumed');
})

console.log("----------") //prints in first line cause because timeout of1sec evenso if timeout of 0ms the callback into taskqueue then to callstack will take time and before that --- log will be completed


// instead of using .then on promise object reference we can directly use it on promise object itself without creating reference

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function() {
    console.log('Async 2 resolved, promise consumed')
})


promiseThree = new Promise(function(resolve, reject) {
    setTimeout( function(){ 
        resolve({username: "Yatharth", email: "yatharthpandey519@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);  //<= whatever parameter we pass in resolve we have it in .then 
})



//Chaining

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = false    //set true to see working of .catch
        if(!error) {
            resolve({username: 'Uttam', password: '1234'})
        } else {
            reject('ERROR IN PROMISE4: Something went wrong')
        }
    }, 1000)
})


promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function (error) {
    console.log(error);
})
.finally(() => console.log('The promise fully consumed, either by resolution or rejection.'))




//async and await is similar but it has less catch handling (have to use try catch block) and different syntax, we create async function which can use await method, waiting for return value from different promises like promisefive, we have to call async function but works on same concept 

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true    
        if(!error) {
            resolve({username: 'Promise5', password: '1234'})
        } else {
            reject("ERROR IN PROMISE5: something went wrong.")
        }
    }, 1000)
})

async function consumePromiseFive() {
   try{
     const response = await promiseFive   //awaits till promise five returns something
    console.log(response);
   } catch (error){
    console.log(error);
   }
}

consumePromiseFive()



// taking a network response based promise using fetch (last time we used xmlhttprequest) 

// some network task take time, here conversion in json takes time but we are not using await on it

async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') //<=fake dummy data response giving site
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error)
    }
}

getAllUser()

// same above stuff with .then .catch, etc make life easy

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
// return response.json()
// })
// .then((data) => console.log(data))
// .catch((error) => console.log(error))