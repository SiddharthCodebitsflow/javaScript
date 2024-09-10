/*
**Arrow Functions in JavaScript**

1. **What are Arrow Functions?**
   - Arrow functions are a concise syntax for writing function expressions, introduced in ECMAScript 6 (ES6).
   - They provide a more compact way to write functions and are especially useful for functions that are used as arguments in other functions or as short callbacks.

2. **Syntax:**
   - Basic syntax: `(parameters) => { ... }`
   - If the function has a single parameter, the parentheses around the parameter can be omitted.
   - For single-line return statements, the curly braces `{}` and the `return` keyword can be omitted.

3. **Key Features:**
   - **Conciseness:** Arrow functions reduce boilerplate code. You can write shorter, more readable code compared to traditional function expressions.
   - **Lexical `this`:** Unlike traditional functions, arrow functions do not have their own `this` context. Instead, `this` is lexically bound to the surrounding context where the arrow function is defined. This makes arrow functions ideal for use in methods that require maintaining the context of `this`.

4. **Examples:**
   - **Basic Arrow Function:**
     ```javascript
     const add = (a, b) => {
         return a + b;
     };
     console.log(add(2, 3)); // Output: 5
     ```
   - **Single Parameter (No Parentheses):**
     ```javascript
     const square = x => x * x;
     console.log(square(4)); // Output: 16
     ```
   - **Single-Line Return (No Curly Braces):**
     ```javascript
     const double = x => x * 2;
     console.log(double(5)); // Output: 10
     ```
   - **Lexical `this`:**
     ```javascript
     function Timer() {
         this.seconds = 0;
         setInterval(() => {
             this.seconds++;
             console.log(this.seconds); // Arrow function keeps the `this` context of Timer
         }, 1000);
     }

     const timer = new Timer();
     ```
     - Here, `this.seconds` refers to the `seconds` property of the `Timer` instance because the arrow function captures the `this` context of the `Timer` constructor function.

5. **Limitations:**
   - **No `this`, `arguments`, `super`, or `new.target`:** Arrow functions do not have their own `this`, `arguments` object, `super`, or `new.target`. They inherit `this` from the enclosing execution context.
   - **Cannot be used as constructors:** Arrow functions cannot be used with the `new` keyword. They do not have a `[[Construct]]` method.

**Summary:**
Arrow functions simplify syntax and maintain the `this` context, making them particularly useful for inline functions and callbacks. However, they should be used with an understanding of their limitations and differences from traditional functions.

*/

const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3)); // Output: 5

const square = x => x * x;
console.log(square(4)); // Output: 16

const double = x => x * 2;
console.log(double(5)); // Output: 10

function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds); // Arrow function keeps the `this` context of Timer
    }, 1000);
}

const timer = new Timer();
