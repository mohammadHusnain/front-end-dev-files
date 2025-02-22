// arrays are mutable , can be changed and strings are immutable

//indexes of strings are immutable and cant be changed

let arr = [23,33,45,8,9,11,99];

arr[0] = 100 //replaces 23 with 100 as arrays are mutable

// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);
// console.log(arr[3]);
console.log(typeof arr);

//methods of array

console.log(arr.toString());
console.log(arr.join(" and "));
console.log(arr.pop()); // pops out and returns last element from array 
console.log(arr.push("husnain")); // adds element to the last index of array
console.log(arr.shift()); // removes and gives first element from array
console.log(arr);
console.log(arr.unshift("ikrma")); // adds string/element to start index of array
console.log(arr);

let a1 = [3, 4, 5]
let a2 = [13, 14, 15]
let a3 = [32, 42, 52]

result = a1.concat(a2,a3)
console.log(result);


let x = [33,11,22,44,66,55]
x.sort();
console.log(x.sort()); // sorts in an ascending manner

let strings = [ "rehan" , "ikrma" , "husnain" , "alee"]
console.log(strings.sort());

// all array methods:

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








