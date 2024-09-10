/*
**Function Expressions in JavaScript**

1. **Definition:**
   - A function expression assigns a function to a variable. Unlike function declarations, function expressions are not hoisted with their body.
   - Only the variable declaration is hoisted. The function assignment occurs at runtime, so invoking the function before the assignment results in an error.

2. **Internal Process:**
   - **Variable Declaration Hoisting:** When a function expression is defined with `var`, the variable declaration is hoisted, but the function assignment is not. Therefore, the variable is initialized with `undefined` until the function is actually assigned.
   - **Assignment at Runtime:** The function is assigned to the variable only when the execution reaches the line where the assignment happens. If the function is invoked before this line, it results in a `TypeError`.

3. **Handling Parameters:**
   - Function expressions, like function declarations, can accept parameters. These parameters are used in the function body to perform operations or return values.
   - Parameters are defined within the parentheses of the function expression and are utilized in the function body.

4. **Examples:**

   - **Function Expression with `var`:**
     ```javascript
     console.log(sum(2, 3));  // Throws TypeError: sum is not a function

     var sum = function(a, b) {
         return a + b;
     };

     console.log(sum(2, 3));  // Output: 5
     ```

     - **Explanation:** 
       - Here, `var sum` is hoisted but initialized with `undefined`. Attempting to call `sum` before its assignment results in a `TypeError` because `sum` is not a function yet.

   - **Function Expression with `let`:**
     ```javascript
     try {
         console.log(multiply(4, 5));  // Throws ReferenceError: Cannot access 'multiply' before initialization
     } catch (e) {
         console.log(e.message);
     }

     let multiply = function(x, y) {
         return x * y;
     };

     console.log(multiply(4, 5));  // Output: 20
     ```

     - **Explanation:**
       - For `let`, the variable `multiply` is hoisted but remains in the Temporal Dead Zone (TDZ) until the code execution reaches its declaration. Accessing it before initialization results in a `ReferenceError`.

   - **Function Expression with `const`:**
     ```javascript
     try {
         console.log(divide(10, 2));  // Throws ReferenceError: Cannot access 'divide' before initialization
     } catch (e) {
         console.log(e.message);
     }

     const divide = function(a, b) {
         return a / b;
     };

     console.log(divide(10, 2));  // Output: 5
     ```

     - **Explanation:**
       - Similar to `let`, `const` function expressions are hoisted, but their initialization is also not performed until the execution reaches their declaration. Accessing them before initialization throws a `ReferenceError`.

*/

console.log(sum(2, 3));  // Throws TypeError: sum is not a function

var sum = function(a, b) {
    return a + b;
};

console.log(sum(2, 3));  // Output: 5

try {
    console.log(multiply(4, 5));  // Throws ReferenceError: Cannot access 'multiply' before initialization
} catch (e) {
    console.log(e.message);
}

let multiply = function(x, y) {
    return x * y;
};

console.log(multiply(4, 5));  // Output: 20

try {
    console.log(divide(10, 2));  // Throws ReferenceError: Cannot access 'divide' before initialization
} catch (e) {
    console.log(e.message);
}

const divide = function(a, b) {
    return a / b;
};

console.log(divide(10, 2));  // Output: 5
