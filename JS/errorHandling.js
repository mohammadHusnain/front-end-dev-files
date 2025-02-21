let a = prompt("enter first number");
let b = prompt("enter second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError(" sorry , this is not allowed ")
}

let sum = parseInt(a)+ parseInt(b);


let x =3;
try {
    console.log("the sum is ", sum*x    ); // if value of var is not defined such as x here use try catch in this situation
    
} catch (error) {
    console.log("error agya value of x is not defined deer!"); // error ko catch krlia humne throw nahi hone dia , aur ab red error throw nahi hoga
    
}

finally{  // MOST IMP : finally is mainly used in THE FUNCTION WHEN WE RETURN TRUE OR FALSE AFTER TRY OR CATCH. normally after return true nothing executes but when we have written finally keyword with console.log it gives output even after return value .
    console.log("files are being closed and db connection is being closed");
    
}



// finally is used here if we dont write finally the last line will not print because we have return values after try and catch

function main() { 
let y = 3;
try {
    console.log("the sum is ", sum * y); // if value of var is not defined such as x here use try catch in this situation
    return true;


} catch (error) {   // error ko catch krlia humne throw nahi hone dia , aur ab red error throw nahi hoga
    console.log("error agya value of x is not defined deer!");
    return false;
    

}

finally {  // MOST IMP : finally is mainly used in THE FUNCTION WHEN WE RETURN TRUE OR FALSE AFTER TRY OR CATCH. normally after return true nothing executes but when we have written finally keyword with console.log it gives output even after return value .
    console.log("files are being closed and db connection is being closed");

}


}

let c = main();
//try catch works on synchronous functions - i-e it works synchronously , if there is an aynchronous function such as setTimeout script dies and catch does not work

