// for in loop is used to access elements/keys inside an object , for in is used for object

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


