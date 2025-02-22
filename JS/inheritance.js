// Parent Class (Base Class)
class Animal {
    constructor(name) {
        this.name = name; // Property
    }

    makeSound() { // Method
        console.log("Animal makes a sound");
    }
}

// Child Class (Derived Class) using Inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Calls the parent class constructor
        this.breed = breed;
    }

    // Method Overriding (Providing a new implementation of makeSound)
    makeSound() {
        console.log(`${this.name} the ${this.breed} barks! 🐶`);
    }
}

// Creating Objects
const genericAnimal = new Animal("alligator");
genericAnimal.makeSound(); // Output: Animal makes a sound

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Output: Buddy the Golden Retriever barks! 🐶
console.log(myDog);

//Inheritance allows objects to inherit properties and methods from other objects.



function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

function Student(name, major) {
    Person.call(this, name); // Inherit properties
    this.major = major;
}

// Inherit methods
Student.prototype = Object.create(Person.prototype);

const student = new Student("Alice", "Computer Science");
student.greet(); // Hello, my name is Alice
console.log(student.major); // Computer Science