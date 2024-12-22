// arrays are mutable , can be changed and strings are immutable

//indexes of strings are immutable and cant be changed

let arr = [23,33,45,8,9,11,99];

arr[0] = 100 //replaces 23 with 100 as arrays are mutable

// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(typeof arr);

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






