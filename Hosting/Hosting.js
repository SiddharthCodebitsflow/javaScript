/*
1. **What is Hoisting?**
   - Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the compile phase.
   - This means you can use variables and functions before they've actually been declared in your code.

2. **Hoisting with `var`:**
   - **How it Works:**
     - When you declare a variable with `var`, the declaration is hoisted to the top of the function or global scope, but it's initialized with `undefined`.
     - This allows you to access the variable before its declaration, but it'll be `undefined` until you assign it a value.
   - **Re-declaration:**
     - You can re-declare the same variable with `var` within the same scope without any issues.

3. **Hoisting with `let`:**
   - **How it Works:**
     - Variables declared with `let` are hoisted, but they aren't initialized until the code execution reaches the declaration. This period before initialization is known as the "temporal dead zone" (TDZ).
     - If you try to access the variable before it's initialized, you'll get a `ReferenceError`.
   - **Re-declaration:**
     - You can't re-declare the same `let` variable within the same block scope. Doing so will result in a syntax error.

4. **Hoisting with `const`:**
   - **How it Works:**
     - Similar to `let`, `const` declarations are hoisted but not initialized. The variable is in the TDZ until it's declared.
     - Accessing it before declaration results in a `ReferenceError`.
   - **Re-declaration:**
     - Variables declared with `const` must be initialized at the time of declaration. They cannot be re-declared or reassigned within the same scope.

5. **Function Declarations:**
   - **How it Works:**
     - Function declarations are fully hoisted. This means you can call the function before its declaration in the code because the entire function definition is available throughout the scope.

6. **Function Expressions:**
   - **How it Works:**
     - With function expressions, only the variable declaration is hoisted, not the function definition. Attempting to call the function before its assignment will result in a `TypeError`.

7. **Class Declarations:**
   - **How it Works:**
     - Classes are not hoisted. You must declare a class before you use it. Accessing a class before its declaration will result in a `ReferenceError`.

8. **Nested Scopes:**
   - **How it Works:**
     - Hoisting behavior can vary between nested functions and blocks. `var`, `let`, and `const` each have different scoping rules that affect how hoisting behaves in nested contexts.
*/


// ****************** var Hoisting ********************************

console.log("****************** var Hoisting ********************************");

console.log(x); // Output: undefined (declaration is hoisted, assignment is not)
var x = 5;
console.log(x); // Output: 5 (assignment is executed here)

function sayHello() {
  console.log("Hello!");
}

sayHello(); // Output: "Hello!" (function declaration is hoisted)

// Function expression with `var`
try {
  console.log(greet); // Output: undefined (declaration is hoisted, assignment is not)
  var greet = function() {
    console.log("Hi!");
  };
  greet(); // Output: "Hi!" (function expression is assigned here)
} catch (e) {
  console.log("Error:", e.message);
}

console.log("****************** end var Hoisting ********************************");


// ****************** let Hoisting ********************************

console.log("****************** let Hoisting ********************************");

try {
  console.log(y); // ReferenceError: Cannot access 'y' before initialization
} catch (e) {
  console.log("Error (let):", e.message); // ReferenceError
}

let y = 10;

console.log("after declaration (let)", y); // Output: 10

{
  try {
    console.log(z); // ReferenceError: Cannot access 'z' before initialization
  } catch (e) {
    console.log("Error (let in block):", e.message); // ReferenceError
  }
  let z = 20;
  console.log("within block (let)", z); // Output: 20
}

console.log("after block (let)", y); // Output: 10 (global scope unaffected)

console.log("****************** end let Hoisting ********************************");


// ****************** const Hoisting ********************************

console.log("****************** const Hoisting ********************************");

try {
  console.log(z); // ReferenceError: Cannot access 'z' before initialization
} catch (e) {
  console.log("Error (const):", e.message); // ReferenceError
}

const z = 20;

console.log("after declaration (const)", z); // Output: 20

try {
  const z = 30; // Error! `const` cannot be re-declared in the same scope
  console.log("re-declared const (const)", z); // This line won't be reached
} catch (e) {
  console.log("Error (const re-declaration):", e.message); // SyntaxError
}

// Class declaration example
try {
  const Person = class {
    constructor(name) {
      this.name = name;
    }
  };

  const person = new Person("John");
  console.log(person.name); // Output: John
} catch (e) {
  console.log("Error (class declaration):", e.message);
}

console.log("****************** end const Hoisting ********************************");

