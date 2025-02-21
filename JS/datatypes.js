// ******************************* USE CTRL+SPACE FOR GETTING ALL PROPERTIES IN VSCODE ********************************

// ******************************* DATATYPES ********************************
let name = "husnain"; // string

let age = 21; // integer

isLoggedIn1 = true; // boolean

console.log(typeof age); // outputs: number

// console.log(typeof undefined); // outputs: undefined

// console.log(typeof null); // outputs: object

// Explanation of Datatypes:
// - `int`, `bigint`: Integer values.
// - `string`: Enclosed in " " or ' '.
// - `boolean`: true or false.
// - `null`: Standalone value (nothing).
// - `undefined`: Variable declared but no value assigned.

// ******************************* DATATYPE CONVERSIONS ********************************
let score = true;

// console.log(typeof score); // outputs: boolean

let valueInNumber = Number(score);

// console.log(typeof valueInNumber); // outputs: number

// Conversion Results:
// - NaN: If value is invalid (e.g., "55abc").
// - Null to Number: Converts to 0.
// - True/False to Number: Converts to 1/0.
// - String to Number: Converts valid strings, else NaN.

let isLoggedIn = "1";

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // outputs: true (non-empty string converts to true)

let someNo = 55;

let stringNo = String(someNo);

console.log(stringNo); // outputs: "55"

console.log(typeof stringNo); // outputs: string

// ******************************* OPERATIONS & STRINGS CONVERSION ********************************
let value = 5;

let negative = -value;

console.log(negative); // outputs: -5

// Arithmetic Operations:
// console.log(2 * 2); // multiplication

// console.log(2 / 3); // division

// console.log(2 ** 2); // exponentiation

// console.log(2 % 2); // modulo

let str1 = "hello ";

let str2 = "husnain";

let str3 = str1 + str2;

console.log(str3); // outputs: "hello husnain"

console.log("1" + 2); // outputs: "12"

console.log(1 + "2"); // outputs: "12"

console.log("1" + 2 + 2); // outputs: "122"

console.log(1 + 2 + "2"); // outputs: "32"

// ******************************* DATATYPES (PRIMITIVE AND NON-PRIMITIVE/REFERENCE TYPES) ********************************

// PRIMITIVE TYPES
// Seven primitive types: [String, Number, Boolean, Null, Undefined, Symbol, BigInt]
let string1 = "husnain";

let num1 = 231;

const islogIn = false;

const outsideTemp = null;

let useremail;

const id = Symbol("123");

const anotherid = Symbol("123");

console.log(id === anotherid); // outputs: false (Symbols are unique)

const BigInt = 67890987898076547654978n;

// NON-PRIMITIVE/REFERENCE TYPES
// Non-primitive types: Arrays, Objects, Functions (always return "object" for typeof)
const students = ["ikrma", "rehan", "husnain"]; // arrays

let myObj = { name: "husnain", age: 22 }; // object

const myFunc = function () {
    console.log("hello pookies");
};

console.log(typeof myFunc); // outputs: function

console.log(typeof outsideTemp); // outputs: object

console.log(typeof useremail); // outputs: undefined

// ******************************* MEMORY: HEAP AND STACK ********************************
// Heap memory: Used for non-primitive types (stored as references).
// Stack memory: Used for primitive types (stored as value copies).

let ytname = "hunny1";

let othername = ytname;

othername = "hunny2";

console.log(ytname); // outputs: "hunny1"

console.log(othername); // outputs: "hunny2"

let user = {
    email: "user@google.com",
    jazzcash: "user@ny.com",
};

let user2 = user;

user2.email = "husnain@google.com"; // Changing reference property

console.log(user.email); // outputs: "husnain@google.com"

// ******************************* STRINGS ********************************
const name8 = "husnain";

const repoCount = 50;

console.log(name8 + repoCount + "value"); // outputs: "husnain50value" (not recommended)

console.log(`hello my name is ${name8} and my repoCount is ${repoCount}`); // outputs: "hello my name is husnain and my repoCount is 50" (recommended)

// STRING METHODS
const gameName = new String("husnainch1");

// console.log(gameName); // logs the string object

console.log(gameName.length); // outputs: 10

console.log(gameName.toUpperCase()); // outputs: "HUSNAINCH1"

console.log(gameName.charAt(8)); // outputs: "h"

const newString = gameName.substring(0, 4);

console.log(newString); // outputs: "husn"

const anotherString = gameName.slice(-8, 4); // Slice supports negative indices

console.log(anotherString); // outputs: ""

const newstring1 = "      rehan       ";

console.log(newstring1); // outputs: "      rehan       "

console.log(newstring1.trim()); // outputs: "rehan"

// URL STRING MANIPULATION
const url = "https://remotegenze.com/remote%20genze";

console.log(url.replace("%20", "-")); // outputs: "https://remotegenze.com/remote-genze"

console.log(url.includes("genz")); // outputs: true

console.log(url.includes("sundarPicai")); // outputs: false

// STRING SPLIT
console.log(gameName.split("----")); // outputs: ["husnainch1"]


