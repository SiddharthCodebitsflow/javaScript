/*
**Immediately Invoked Function Expressions (IIFE)**

1. **What is an IIFE?**
   - An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is defined and executed immediately after its creation.
   - This pattern is used to execute code without polluting the global namespace, creating a private scope for variables.

2. **Syntax:**
   - The basic syntax of an IIFE involves wrapping a function expression in parentheses and then immediately invoking it with another set of parentheses.
   - Syntax Example:
     ```javascript
     (function() {
         // Function body
     })();
     ```

3. **How It Works:**
   - **Function Expression:** The function is defined as an expression rather than a declaration. This is important because function declarations cannot be immediately invoked.
   - **Immediate Invocation:** The function is immediately executed after its definition, which allows for the execution of code right away.

4. **Why Use IIFE?**
   - **Encapsulation:** IIFEs help encapsulate code, providing a private scope for variables and functions. This prevents variables from leaking into the global scope.
   - **Avoid Global Pollution:** By using IIFEs, you can avoid adding variables or functions to the global scope, reducing the risk of conflicts with other code.
   - **Initialization Code:** Useful for running setup code or initializing values that don’t need to be accessible from outside the function.

5. **Example:**
   ```javascript
   (function() {
       // This code runs immediately
       let message = "IIFE executed!";
       console.log(message); // Output: IIFE executed!
   })();
   
   // Attempting to access `message` outside the IIFE would result in an error
   // console.log(message); // ReferenceError: message is not defined
*/

(function() {
    console.log("IIFE executed!"); // Output: IIFE executed!
})();
