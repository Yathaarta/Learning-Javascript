// ----------------------Dates--------------------

// In JavaScript, dates and times are handled using the built-in Date object. This object stores dates as the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC (the Unix Epoch).

let myDate = new Date()         //default current date and time
console.log(myDate)                //prints current date and time though less readable an in UTC
console.log(myDate.toString())     //converts to local date time and display in string with time in 24 hr system and gmt and other info also
console.log(myDate.toDateString()) //convert to local date time set in node configuration but only display date
console.log(myDate.toLocaleString())  //converts to local datetime and displays date and time but time in am pm system
console.log(typeof myDate)   //object

// ways to created date time variable values
let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate2 = new Date("01-13-2023 21:54:33") //better way
let myCreatedDate3 = new Date("01-13-2023 21:54:323")  //invalid way
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate2.toLocaleString())
console.log(myCreatedDate3.toLocaleString())

let myCreatedDate4 = myCreatedDate- myCreatedDate2  //returns difference in milliseconds we can convert it to seconds of hr min sec format using math operations 
console.log(myCreatedDate4)

// timestamps
let date = Date.now()  //gets timestamp current time diff from epoch in millisecond
console.log(date)
console.log(myCreatedDate.getTime())      //to get timestamp from a datetime format , can do math operation to comparetimes dates and other


// other methods

console.log(myCreatedDate.getMonth())
console.log(myCreatedDate.getDay())
console.log(myCreatedDate.getDate())


// LocaleString is customisable to return datetime in different formats

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};

console.log(myCreatedDate2.toLocaleString('default', options))


