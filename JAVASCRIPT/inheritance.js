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
const genericAnimal = new Animal("Unknown");
genericAnimal.makeSound(); // Output: Animal makes a sound

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Output: Buddy the Golden Retriever barks! 🐶
