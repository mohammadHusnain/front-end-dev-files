//USE CTRL+SPACE FOR GETTING ALL PROPERTIES IN VSCODE

// DATATYPES
let name = "husnain"; // string
let age = 21; // int
isLoggedIn1 = true; // boolean

console.log(typeof age); // outputs number
// console.log(typeof undefined); // outputs undefined
// console.log(typeof null); // outputs object

//int , big int
// string--> " " , boolean --> true or false
//null = standalone value , undefined --> not giving any value , (value is not assigned)

// DATATYPES CONVERSIONS

let score = true;
//console.log(typeof score); // typeof determines datatype of that variable

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);

//console.log(valueInNumber); //outputs  ; NaN(not a number) when given value "55abc" instead of 55 ,
//when let score = undefined it outputs same as NaN and
//when let score = null , it gives output 0 coz valueInNumber = null.
// when let score = true it gives output 1
// when let score is tring such as let score = "husnain" , it gives output NaN coz string cannot be converted to number

let isLoggedIn = "1";
let booleanIsLoggedIn = Boolean(isLoggedIn);

//console.log(booleanIsLoggedIn); //outputs if isLoggedIn= : 1==>true , 0==>false , ""==>false , "husnain"==> true;

let someNo = 55;
let stringNo = String(someNo);

console.log(stringNo);
console.log(typeof stringNo);

// *********************** OPERATIONS & STRINGS CONVERSION**************************//

let value = 5;
let negative = -value;
console.log(negative);

// console.log(2 * 2);
// console.log(2 / 3);
// console.log(2 ** 2);
// console.log(2 % 2);

let str1 = "hello ";
let str2 = "husnain";
let str3 = str1 + str2;

console.log(str3);

console.log("1" + 2);

console.log(1 + "2");

console.log("1" + 2 + 2); // outputs 122 , if string comes first of all then every number after it will also be considered as string and no operation will be applied on it

console.log(1 + 2 + "2"); // outputs 32 , because string is at last and numbers before string will not be treated as string and operations will be applied upon them normally like here 1+2 =3 will be done and then string comes as 2 and we get 32.

//*******************DATATYPES (PRIMITIVE AND NON-PRIMITIVE/reference types) SUMMARY *****************************//

//PRIMITIVE TYPES (call by value) ==> seven ==> [String , Number , Boolean , Null(empty) , Undefined(var declared but not value given) , Symbol , BigInt]

let string1 = "husnain";
let num1 = 231;
const islogIn = false;
const outsideTemp = null;
let useremail;

// symbol differentiates even if we provide same value
const id = Symbol("123");
const anotherid = Symbol("123");

console.log(id === anotherid);

const BigInt = 67890987898076547654978n;

//NON-PRIMITIVE/reference types ==> Array , Objects , Functions , return of /NON-PRIMITIVE types is always Object

const students = ["ikrma , rehan , husnain"]; //arrays

//object

let myObj = {
    name: "husnain",
    age: 22,
};

const myFunc = function () {
    console.log("hellow pookies");
};

console.log(typeof myFunc); //function
console.log(typeof outsideTemp); //object
console.log(typeof useremail); //undefined

//************************MEMORIES ==> HEAP AND STACK, heap memory is used for NON-PRIMITIVE datatypes and we gets reference and STACK memory is used for PRIMITIVE datatypes and we get copy of value in it.*/

let ytname = "hunny1";
let othername = ytname;
othername = "hunny2";

console.log(ytname);
console.log(othername);

let user = {
    email: "user@google.com",
    jazzcash: "user@ny.com"
};

let user2 = user;

user2.email = "husnain@google.com"; //we can access object properties through dot(.)

console.log(user.email);
console.log(user2.email);


// *************************************STRINGS************************************************//

const name8 = 'husnain'
const repoCount = 50;

console.log(name8 + repoCount + "value"); // not recommended

console.log(`hello my name is ${name8} and my repoCount is ${repoCount}`); // highly  recommended

const gameName = new String('husnainch1')
// console.log(gameName);

//******string methods****

// console.log(gameName[3]);
// console.log(gameName.__proto__);

// length , to uppercase/lowercase 
console.log(gameName.length);
console.log(gameName.toUpperCase());

//character at position
console.log(gameName.charAt('8'));

//
const newString = gameName.substring(0, 4)
console.log(newString);

//slice
const anotherString = gameName.slice(-8, 4)  //negative values can be used in slice
console.log(anotherString);

//trim
const newstring1 = "      rehan       ";
console.log(newstring1);
console.log(newstring1.trim());

//url
const url = "https://remotegenze.com/remote%20genze"

console.log(url.replace('%20', '-'));

//include 
console.log(url.includes('genz'));
console.log(url.includes('sundarchudai'));

//split
console.log(gameName.split('----'));
consol

