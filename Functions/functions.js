/*
1. Types of Functions in JavaScript:

   JavaScript offers several ways to define functions. The main types include:
   
   1.1 **Function Declaration:**
       - A function that is declared using the `function` keyword.
       - It is hoisted, meaning you can call it before the actual declaration.

   1.2 **Function Expressions:**
       - A function that is defined inside an expression, typically assigned to a variable.
       - Can be anonymous (without a name) or named.
       - Unlike function declarations, function expressions are not hoisted.

   1.3 **Arrow Functions:**
       - A shorter syntax for function expressions, introduced in ES6.
       - Lexically binds `this`, making it useful for callbacks or methods where the value of `this` should remain the same.
       - Does not have its own `this` or `arguments` object.

   1.4 **Immediately Invoked Function Expressions (IIFE):**
       - Functions that are defined and executed immediately after they are created.
       - Often used to create isolated scope, especially in older JavaScript before modules were widely available.

   Example Code Below Explains Each Type.
*/

// 1.1 Function Declaration
function sayHello(name) {
    return `Hello, ${name}!`;
}

console.log(sayHello("Siddharth")); // Output: Hello, Siddharth!

// You can call the function before its declaration due to hoisting
console.log(sayGoodbye("Siddharth")); // Output: Goodbye, Siddharth!

function sayGoodbye(name) {
    return `Goodbye, ${name}!`;
}

// 1.2 Function Expressions

// Anonymous Function Expression
const greetAnonymous = function(name) {
    return `Hello, ${name} (Anonymous)!`;
};

console.log(greetAnonymous("Siddharth")); // Output: Hello, Siddharth (Anonymous)!

// Named Function Expression
const greetNamed = function greet(name) {
    return `Hello, ${name} (Named)!`;
};

console.log(greetNamed("Siddharth")); // Output: Hello, Siddharth (Named)!

// 1.3 Arrow Functions

// Basic arrow function with multiple parameters
const greetArrow = (name) => {
    return `Hello, ${name} (Arrow)!`;
};

console.log(greetArrow("Siddharth")); // Output: Hello, Siddharth (Arrow)!

// Arrow function with a single parameter, using concise body
const greetArrowSingle = name => `Hello, ${name} (Single-line Arrow)!`;

console.log(greetArrowSingle("Siddharth")); // Output: Hello, Siddharth (Single-line Arrow)!

// Arrow function with no parameters
const greetNoParams = () => "Hello, World! (No params Arrow)";
console.log(greetNoParams()); // Output: Hello, World! (No params Arrow)

// 1.4 Immediately Invoked Function Expression (IIFE)

// Self-executing anonymous function
(function() {
    console.log("IIFE executed!"); // Output: IIFE executed!
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}! (IIFE)`); // Output: Hello, Siddharth! (IIFE)
})("Siddharth");

// Notes on Arrow Functions:
// - Arrow functions do not have their own `this` context, they inherit `this` from the parent scope.
// - This makes them ideal for scenarios where you want to maintain the value of `this`, like in callbacks.
