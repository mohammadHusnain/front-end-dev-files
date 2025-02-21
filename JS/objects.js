// objects : object LITERALs 

// object

const mySym = Symbol("key1")

const jsUser = {
    name: 'husnain',
    'full name': 'husnain bhinder',

    mySym: "key1", // symbol is not being used as symbol here due to incorrect synatax
    [mySym]: "key2", // symbol is used as symbol here syntax is correct
    age: 19,
    email: 'husnain@google.com',
    isLoggedIn: false,
    lastLoginDays: ['monday', 'friday']

}

console.jsUser.log(jsUser.email);
console.log(jsUser['email']); // correct form is square notation to access value rather than upper one

console.log(jsUser["full name"]);

console.log(jsUser.mySym);
console.log(jsUser[mySym]);




