
let marks = 88;

if (marks == 40) {
    console.log("you have passed the course");
    
} 
else if(marks < 40){
    console.log("you have failed the course");

} 
else if (marks >= 50 && marks <=59) {
    console.log("you have got E grade"); 
}

else if (marks >= 60 && marks <= 69) {
    console.log("you have got D grade");
}
else if (marks >= 70 && marks <= 79) {
    console.log("you have got C grade");
}
else if (marks >= 80 && marks <= 89) {
    console.log("you have got B grade");
}
else if (marks >= 90) {
    console.log("you have got A grade");
}



// == is for equal to and === is for equals value and types.
// 3=="3" is true coz it only compares value and 3==="3" is false coz it compares both values and types

// != , and !== are not equal to and not equal to value and not equal to type
// logical operators, && and || or , ! is not

// > a=23
// 23
//     > b=24
// 24
//     > a !== b
// true
//     > b=23
// 23
//     > a == b
// true
//     > a === b
// true
//     > b="23"
// '23'
//     > a == b
// true
//     > a === b
// false 
 
// ternary operator used here is ?

let a = 6;
let b = 8;

let c = a>b ? (a-b) : (b-a) // ? = ternary operator , if a is greater than b , then do a-b else do b-a.
console.log(c);
