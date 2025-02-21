// Dates And TimeStamps

let myDate = new Date;
// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 5, 29)
console.log(myCreatedDate.toDateString()); // in js, months are started from 0 except 1 thats why it is giving output as June 29,2023 when I put 5th month

let myCreatedDate2 = new Date("2023-05-29")
console.log(myCreatedDate2.toDateString()); //in this format of writing date (yyyy-mm-dd) months are started from 1 instead of 0 so here it outputs May 29 instead of June 29 due to format

let myCreatedDate1 = new Date(2023, 5, 29, 3, 5)
console.log(myCreatedDate1.toLocaleString());  //toLocaleString also outputs time along with day and date as shown




let myTimeStamp = Date.now()
console.log(myTimeStamp); //outputs 172509876543 which is value of milli seconds from starting date in js calendar 1st january 1970.

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000)); // converting from millisec to seconds

// other methods
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 is  written so that end user must not confuse that months are started from 0 in js
console.log(newDate.getDay());
console.log(newDate.getHours());

console.log(newDate.toLocaleString('default', { weekday: "long" }));



