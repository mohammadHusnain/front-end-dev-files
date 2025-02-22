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

// all array methods :

// 1️⃣ Basic Array Declaration (Numbers, Strings, Mixed)
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry"];
let mixedArray = [1, "Hello", true, { key: "value" }, [2, 4, 6]];

console.log(numbers, fruits, mixedArray);


// 2️⃣ Array with `new Array()`
let newArray = new Array(5).fill("Default");
console.log(newArray);


// 3️⃣ Multi-Dimensional Array (Nested Arrays)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][1]); // Output: 5


// 4️⃣ Array Methods - Adding Elements
numbers.push(6);       // Adds to end
numbers.unshift(0);    // Adds to beginning
console.log(numbers);


// 5️⃣ Array Methods - Removing Elements
numbers.pop();         // Removes from end
numbers.shift();       // Removes from beginning
console.log(numbers);


// 6️⃣ Array Splicing - Adding and Removing at Specific Index
numbers.splice(2, 0, 99, 100); // Inserts 99, 100 at index 2
console.log(numbers);
numbers.splice(2, 2);  // Removes 2 elements from index 2
console.log(numbers);


// 7️⃣ Array Slicing - Extracting Elements
let sliced = numbers.slice(1, 3); // Extracts elements from index 1 to 2
console.log(sliced);


// 8️⃣ Spread Operator to Clone Arrays
let clonedArray = [...numbers];
console.log(clonedArray);


// 9️⃣ Array Destructuring
let [first, second, ...rest] = numbers;
console.log(first, second, rest);


// 🔟 Higher-Order Functions
// 10.1 - `map()` - Modify Each Element
let squared = numbers.map(num => num * num);
console.log(squared);


// 10.2 - `filter()` - Select Elements
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);


// 10.3 - `reduce()` - Aggregate Data
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);


// 10.4 - `find()` - Find First Matching Element
let found = numbers.find(num => num > 2);
console.log(found);


// 10.5 - `some()` - Check If At Least One Element Matches
let hasNegative = numbers.some(num => num < 0);
console.log(hasNegative);


// 10.6 - `every()` - Check If All Elements Match
let allPositive = numbers.every(num => num > 0);
console.log(allPositive);


// 11️⃣ Sorting Arrays
let unsorted = [4, 1, 3, 7, 2];
let sortedAsc = [...unsorted].sort((a, b) => a - b);  // Ascending Order
let sortedDesc = [...unsorted].sort((a, b) => b - a); // Descending Order
console.log(sortedAsc, sortedDesc);


// 12️⃣ Array Joining and Splitting
let joinedString = fruits.join(" - ");
console.log(joinedString);

let splitString = "Hello,World,JS".split(",");
console.log(splitString);


// 13️⃣ Checking Element Existence
console.log(fruits.includes("Apple")); // true
console.log(fruits.indexOf("Banana")); // 1


// 14️⃣ Flattening Nested Arrays
let nestedArr = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArr.flat(2)); // Flattens up to 2 levels


// 15️⃣ Using `Array.from()` to Convert Different Data to Arrays
let strArray = Array.from("Hello");
console.log(strArray);

let setToArray = Array.from(new Set([1, 2, 3, 3, 2, 1]));
console.log(setToArray);


// 16️⃣ Using `fill()` to Initialize or Modify an Array
let filledArray = new Array(5).fill(10);
console.log(filledArray);


// 17️⃣ Reversing an Array
let reversedArray = [...numbers].reverse();
console.log(reversedArray);


// 18️⃣ Copying a Portion of an Array Using `copyWithin()`
let copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 2, 4);
console.log(copyArr);


// 19️⃣ Finding Unique Elements Using `Set`
let duplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueValues = [...new Set(duplicates)];
console.log(uniqueValues);


// 20️⃣ Merging Arrays Using `concat()`
let mergedArray = numbers.concat(fruits);
console.log(mergedArray);






