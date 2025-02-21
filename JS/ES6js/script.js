// let and const are from es6 , let makes a variable and const makes a constant , both are different and both have some similarities

//both are braces scoped means initialized or declared in braces , they wont be accessed outside { let a =12; cant be accessed outside  }

// arrow functions es6=>consists of 3 flavors

// 1- fat arrow function 
   var a =  ()=>{

    }

    a(); //calling function named a

// 2- arrow fnc with 1 parameter

var b = (parm)=>{} 
// can be written as : var b = parm=>{} // fat hata dia , but it is only used wen we have only 1 paramter 

b(12);

var c = (parm1 , param2) => { } 
c(33,44) // here we cant remove fat as there are 2 parameters

// 3- fat arrow fnc with implicit return

// var a = ()=> any value  , then print it , console.log(g()); 

var z = ()=> 34;
console.log(z());

