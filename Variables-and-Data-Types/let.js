/*
**Detailed Explanation of `let` in JavaScript**

1. **Block Scoping:**
   - Variables declared with `let` are block-scoped, meaning they are only accessible within the block (enclosed by `{}`) in which they are declared.
   - This is different from `var`, which is function-scoped or globally scoped if declared outside any function.
   - **Example:**
     ```javascript
     {
         let x = 10;
         console.log(x); // Output: 10 (accessible within the block)
     }
     
     console.log(x); // ReferenceError: x is not defined (not accessible outside the block)
     ```

2. **Temporal Dead Zone (TDZ):**
   - When using `let`, the variable is hoisted to the top of its block, but not initialized. This period between the start of the block and the line where the variable is declared is known as the Temporal Dead Zone (TDZ).
   - During TDZ, the variable is in a state where it cannot be accessed, and attempting to access it before its declaration will result in a `ReferenceError`.
   - **Example:**
     ```javascript
     console.log(y); // ReferenceError: Cannot access 'y' before initialization

     let y = 20;
     console.log(y); // Output: 20 (accessible after initialization)
     ```

3. **Re-Declaration Rules:**
   - Variables declared with `let` cannot be re-declared in the same block scope. Attempting to re-declare a `let` variable in the same scope results in a `SyntaxError`.
   - You can, however, reassign the value of a `let` variable.
   - **Example:**
     ```javascript
     let z = 30;
     console.log(z); // Output: 30

     z = 40; // Reassignment is allowed
     console.log(z); // Output: 40

     // Uncommenting the following line will cause an error
     // let z = 50; // SyntaxError: Identifier 'z' has already been declared
     ```

*/

let globalLet = 100; // Global variable, outside any function

console.log("before function (let)", globalLet); // Case 1: 100 (Accessible anywhere in global scope)

function testLet() {
  let globalLet = 500; // Local variable shadows the global one
  console.log("inside the function global variable (let)", globalLet); // Case 2: 500 (local variable shadows global)

  let localLet = 10; // Function-scoped variable with `let`
  console.log("local variable (let)", localLet); // Case 3: 10 (local variable within the function)

  if (true) {
    let localLet = 20; // Block-scoped with `let`, separate from the one outside the `if`
    console.log("block-scoped local variable (let)", localLet); // Case 4: 20 (block-scoped)
  }

  console.log("after if block (let)", localLet); // Case 5: 10 (back to the function-scoped `localLet`)
}

testLet();

console.log("after function (let)", globalLet); // Case 6: 100 (global variable, unaffected by local re-declaration)

try {
  console.log("outside of function (let)", localLet); // Case 7: Error! (localLet is not accessible outside the function)
} catch (e) {
  console.log("Error (let):", e.message); // Case 7: ReferenceError
}

{
  let globalLet = 200; // No error, `let` can be re-declared in a different block scope
  console.log("globalLet re-declared in different block (let)", globalLet); // Case 8: 200 (local to block)
}

console.log("after block (let)", globalLet); // Case 9: 100 (global variable, unchanged outside the block)

console.log("****************** end let ********************************");