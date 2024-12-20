//for loop

let array = [34,44,55,66,77,88];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
    
}
a=0;
for (let i =3 ; i<=9 ; i++){
    console.log(a+i);
    
}

//for in loop is used to access elements/keys inside an object , for in is used for object

let obj1 = {
    name:"husnain",
    role:"front-end developer",
    organization:"dubizzle labs"
}

for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
        const element = obj1[key];

        console.log(key, element);
        
        
    }
}

//for of loop, for of loop is used for iteration which is used for "array"

for (const char of "husnain") {
    console.log(char);
    
}

const products = [
    {name : "HP corei5 7th gen " , price : "50000"},
    { name: "xsmax ", price: "60000" },
    { name: "macBook Pro 2022 m2 ", price: "220000" }
]

for (const element of products) {
    console.log(element);
    
}

for ( const {name , price} of products) {
    console.log( `Product: ${name}, Price: $${price}`);
    
}

// while loop

let i =0;
while (i<6) {
    console.log(i);
    i++;
    
}
