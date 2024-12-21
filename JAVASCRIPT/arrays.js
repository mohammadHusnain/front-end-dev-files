const myArr1 = [44, 22, "chuneeb", 11]

const myArr2 = new Array(55, 88, 543)
// console.log(myArr2[1]);

//array methods

myArr2.push(66, 44)         //add values in an array
myArr2.pop()        // removes last values from array
// console.log(myArr2);

myArr2.unshift(9)         // adds given value at start of array
myArr2.shift()          // removes first added value from array
// console.log(myArr2);

console.log(myArr2.includes(2));       //tells whether value is in array or not and gives output as bool datatype true or false

console.log(myArr2.indexOf(543));      // results index of value and -1 if value does not exists in the array


const newArr = myArr2.join()      //      join bounds the array and coverts it to string datatypes
 
console.log(myArr2);
console.log(newArr);
console.log(typeof newArr);

// slice and splice 

console.log('slice and splice concepts');
console.log('A', myArr2);

const myn1 = myArr2.slice(1, 3)      // slice : Extracts a section of an array and returns it as a new array without modifying the original array. slice() is used for copying elements. slice() does not modify the original array

console.log(myn1);

console.log('B', myArr2);


const myn2 = myArr2.splice(1, 3)   // splice : Changes the content of an array by removing or replacing existing elements and/or adding new elements in place. . splice() is used for adding/removing elements from an array. splice() modifies the original array.

console.log('C', myArr2);
console.log(myn2);

// slice and splice example

let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let primaryColors = colors.slice(0, 3); // Extracts first three elements

console.log(primaryColors); // Output: ['red', 'green', 'blue']
console.log(colors);        // Output: ['red', 'green', 'blue', 'yellow', 'purple'] (Original array is unchanged)

//splice

let colors1 = ['red', 'green', 'blue', 'yellow', 'purple'];
colors1.splice(1, 2, 'orange', 'pink'); // Removes 2 elements starting from index 1, adds 'orange' and 'pink'

console.log(colors1); // Output: ['red', 'orange', 'pink', 'yellow', 'purple']


//---------------------------------------------------------------------------------//

// arrays part 2

console.log("---pushing-----");


const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman ', 'batman', 'flash']

marvel_heros.push(dc_heros); //array inside array as an index

console.log(marvel_heros);

console.log(marvel_heros[3][1]); // outputs first index value of 3rd index from array

console.log("--------concatting------");

const allheros = marvel_heros.concat(dc_heros)   // individually represent each index value of an array
console.log(allheros);

console.log("-------spread method ------");

const allNew_heros = [...marvel_heros, ...dc_heros]   // individually represent each index value of an array
console.log(allNew_heros);

//flat method : shows spread out values in one array 

console.log("------flat method------");


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const outputanotherArray = anotherArray.flat(4)
console.log(outputanotherArray);

console.log(Array.isArray("husnain"));  // questions whether given statement is array or not

console.log(Array.from("husnainBhinder")); //converts given values into array

console.log(Array.from({ name: "ikrmasharaf" })); // interesting , returns empty array coz it is unable to analyze which to convert into array whether name or hitesh

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score3, score2));




