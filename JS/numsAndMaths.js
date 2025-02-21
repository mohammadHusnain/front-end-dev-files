// NUMBERS AND ITS METHODS
const score = 400;
//console.log(score);


const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNumber = 45.6578
//console.log(otherNumber.toPrecision(4));

//to localeString provides commas among numbers in british style
const othernumber1 = 100000000;
console.log(othernumber1.toLocaleString());
console.log(othernumber1.toLocaleString('en-IN'));



//******************* MATHS *******************/

console.log(Math);

// methods

// console.log(Math.abs(-4));   //changes neg to positive sign
// console.log(Math.round(6.77)); //round off the number 
// console.log(Math.ceil(6.77)); //ceiling means top number, so always returns one number ahead even 4.1 or 4.9 , outputs : 5
// console.log(Math.floor(6.77)); //floor means low number, so always returns one number behind even 4.1 or 4.9 , outputs : 4
// console.log(Math.min(4,6,7,9,2)); //minimum 
// console.log(Math.max(4,6,7,9,2)); // maximum 

//imp property

console.log(Math.random()); // outputs value always between 0 and 1 in decimal form

console.log(Math.random() * 10 + 1)
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // most imp formula ==> max-min = *10 and +1 is for purpose that value should not be zero


