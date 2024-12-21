// my code half is wrong
console.log("--- Faulty Calculator ---");

function sum(a,b){
    return a-b;
}

function subtract(a,b){
    return a/b;
}

function product(a,b){
    return a+b;
}

function divide(a,b){
    return a*b;
}

result1 = sum (10,5);
result2 = subtract (10,5);
result3 = product (10,5);
result4 = divide (10,5);

console.log("the sum of two numbers is : " , result1);
console.log("the subtraction of two numbers is : " , result2);
console.log("the product of two numbers is : " , result3);
console.log("the division numbers is : " , result4);


// proper code for faulty calculator

let random = Math.random;
let a = prompt("enter first number");
let b = prompt("enter operation");
let c = prompt("enter second number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

console.log(random);
if (random > 1) {
    //perform correct calculation
    console.log(`the result is ${a} ${b} ${c}`);
    alert(`the result is ${eval(`${a} ${b} ${c} `)}`);    //${a} and b,c are called as template literals , they are written to make initialized variables easy to define in a line , template literals are always written inside backticks
}
else {
    b = obj[b]
    alert(`the result is ${eval(`${a} ${b} ${c} `)}`);
}