//my code half is wrong
// console.log("--- Faulty Calculator ---");

// function sum(a, b) {
//     return a - b;
// }

// function subtract(a, b) {
//     return a / b;
// }

// function product(a, b) {
//     return a + b;
// }

// function divide(a, b) {
//     return a * b;
// }

// result1 = sum(10, 5);
// result2 = subtract(10, 5);
// result3 = product(10, 5);
// result4 = divide(10, 5);

// console.log("the sum of two numbers is : ", result1);
// console.log("the subtraction of two numbers is : ", result2);
// console.log("the product of two numbers is : ", result3);
// console.log("the division numbers is : ", result4);


// // proper code for faulty calculator

// let random = Math.random;
// let a = prompt("enter first number");
// let b = prompt("enter operation");
// let c = prompt("enter second number");

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",
// }

// console.log(random);
// if (random > 1) {
//     //perform correct calculation
//     console.log(`the result is ${a} ${b} ${c}`);
//     alert(`the result is ${eval(`${a} ${b} ${c} `)}`);    //${a} and b,c are called as template literals , they are written to make initialized variables easy to define in a line , template literals are always written inside backticks
// }
// else {
//     b = obj[b]
//     alert(`the result is ${eval(`${a} ${b} ${c} `)}`);
// }

// //exercise 2 : BUSINESS NAME GENERATOR my code

// function businessNameGenerator(adj, name, word) {
//     return adj + name + word;
// }

// result1 = businessNameGenerator("Crazy ", "Engine ", "Hub");
// result2 = businessNameGenerator("Fire", "Foods", "Bros");
// result3 = businessNameGenerator("Amazing", "Garmrents", "Limited");

// console.log("Welcome To :", result1);
// console.log("Welcome To :", result2);
// console.log("Welcome To :", result3);


// exercise 3 :

// function factorial(num) {
//     if (num == 0 || num == 1) {
//         return 1;
//     }

//     let result = 1;

//     for (let index = 1; index <= num; index++) {
//         result = result*index;
//     }
//     return result;
// }
// const num = 5;
// console.log("factorial of "+ num + " is : " + factorial(num));

// function fact(numb) {
//     if (numb === 0 || numb === 1) {
//         return 1;
//     }
//     return Array.from({ length: numb }, (_, i) => i + 1).reduce((result, index) => result * index, 1);
// }

// const numb = 6; // Replace with your desired number
// console.log("Factorial of " + numb + " is: " + factorial(numb));

//exercise 4

console.log("4 th exercise showing giving random colors to boxes using dom manipulation");

// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children //same as above acccess the all children of container which are boxes

console.log(boxes);


//a+Math.random() (b-a) a=0 , b=255;   logic
function getrandomclr(){        
    let val1 = 0 + Math.random() * 255
    let val2 = 0 + Math.random() * 255;
    let val3 = 0 + Math.random() * 255; 

    return `rgb(${val1} , ${val2} , ${val3})`; //template literals for printing values
}

Array.from(boxes).forEach(e=> {
e.style.backgroundColor = getrandomclr();    
e.style.color = getrandomclr();
})
