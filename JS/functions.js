//functions are also used to enhance reusability of code

function average(a,b,c) {
 return (a+b+c)/3; 
    // console.log((a+b+c)/3);

}

result1 = average(5, 10, 15);   
result2 = average(50, 10, 165);   
result3 = average(25, 110, 115);

console.log("the average of numbers is :" , result1);
console.log("the average of numbers is :" , result2);
console.log("the average of numbers is :" , result3);

// ARROW FUNCTIONS 

const hello = (name , age ) => {
    console.log(`Hello ${name}`);
    console.log((`You are ${age} years old`));
    
    
}

hello("husnain" , 21)

//arrow functions with map, filter and reduce 

const numbers = [1,2,3,4,5,6,7,8,9]
const squares = numbers.map

// best examples for functions mostly asked:

// 1️⃣ Remove Duplicates from an Array (Without Using Set)
function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


// 2️⃣ Capitalize the First Letter of Each Word in a Sentence
function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"


// 3️⃣ Find the Most Frequent Element in an Array
function mostFrequentElement(arr) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequent;

    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequent = num;
        }
    }
    return mostFrequent;
}

console.log(mostFrequentElement([1, 3, 2, 3, 4, 3, 2, 2, 2, 2])); // Output: 2


// 4️⃣ Check if a String is a Palindrome
function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false


// 5️⃣ Generate a Random Hex Color Code
function randomHexColor() {
    let hex = "#";
    let characters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        hex += characters[Math.floor(Math.random() * 16)];
    }
    return hex;
}

console.log(randomHexColor()); // Output: A random hex color like #A12BCF




