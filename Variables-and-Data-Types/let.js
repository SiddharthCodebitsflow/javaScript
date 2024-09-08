/*

1. let is block-scoped and cannot be re-declared in the same scope.
   - It is not hoisted in the same way as var and has a temporal dead zone until the variable is initialized.
   - You can reassign `let` variables but not redeclare them in the same scope.


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