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



