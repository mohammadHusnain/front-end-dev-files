//Modules (import/export) Modules allow you to split your code into reusable pieces.


//// math.js (export)

export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js (import)
import { add, subtract } from './math.js';
console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2