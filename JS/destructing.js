//Destructuring allows you to extract values from arrays or objects into variables

// array destructing

const numbers = [1, 2, 3]
const [a, b, c] = numbers;
console.log(numbers);

//object destructing

const person = {
    name: "husnain",
    age: 20,
    dos: "gym"
};

const {name,age,dos} = person;
console.log(name , age , dos);

// template literals : Template literals allow you to embed expressions inside strings using backticks (`).

const name1 = "husnain";
const age1 = 21;
console.log(`my name is ${name1} and my age is ${age1}`)

// Spread/Rest Operators
// Spread Operator: Expands an array or object into individual elements.
// Rest Operator: Collects multiple elements into an array

const nos = [4,35345,6352,345346,66]
const newnos = [...nos, 554,5454,65765,9876,765,5432,6543]
console.log( newnos);
