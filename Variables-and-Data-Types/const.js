/*
1. const is block-scoped and must be initialized at the time of declaration.
   - It cannot be reassigned or redeclared in the same scope.
   - Unlike `let`, `const` creates a constant reference to a value and does not allow reassignment.

*/

console.log("****************** const ********************************");

const globalConst = 100; // Global constant, outside any function

console.log("before function (const)", globalConst); // Case 1: 100 (Accessible anywhere in global scope)

function testConst() {
  const globalConst = 500; // Local constant shadows the global one
  console.log("inside the function global constant (const)", globalConst); // Case 2: 500 (local constant shadows global)

  const localConst = 10; // Function-scoped constant
  console.log("local constant (const)", localConst); // Case 3: 10 (local constant within the function)

  if (true) {
    const localConst = 20; // Block-scoped constant, separate from the one outside the `if`
    console.log("block-scoped local constant (const)", localConst); // Case 4: 20 (block-scoped)
  }

  console.log("after if block (const)", localConst); // Case 5: 10 (back to the function-scoped `localConst`)
}

testConst();

console.log("after function (const)", globalConst); // Case 6: 100 (global constant, unaffected by local re-declaration)

try {
  console.log("outside of function (const)", localConst); // Case 7: Error! (localConst is not accessible outside the function)
} catch (e) {
  console.log("Error (const):", e.message); // Case 7: ReferenceError
}

try {
  const globalConst = 200; // Error! `const` cannot be re-declared in the same scope
  console.log("globalConst re-declared in the same scope (const)", globalConst); // Case 8: Error
} catch (e) {
  console.log("Error (const):", e.message); // Case 8: SyntaxError
}

{
  const globalConst = 400;
  console.log("In other block scope ", globalConst); // case 9: 400 ( due to const re-declear in block scope)
}

console.log("****************** end const ********************************");
