/*

1. let use for declear the variable but different behaviour with scope or assigne the value.

        i. var, functions scpoe , hosted , re-declearation 

            var is function scoped , meaning it visible throught the function where it decleard .

            Variable decleared with var are hoisted , meaning they can be accessed before their declearation (but their value will be undefined zuntil the actual assignment )

            You can re-declear variable with var.

            you can see example below 

*/

// ****************** var ********************************

console.log("****************** var ********************************");

var globalVar = 100; // Global variable, outside any function

console.log("before function", globalVar); // Case 1: 100 (Accessible anywhere in global scope)

function testVar() {
  var globalVar = 500;
  console.log("inside the function global variable", globalVar); // Case 2: 100 (global variable accessible inside the function)

  var localVar = 10;
  console.log("local variable", localVar); // Case 3: 10 (local variable within the function)

  if (true) {
    var localVar = 20; // Case 4: Re-declaration within the same function, `var` is function-scoped
    console.log("re declear local variable", localVar); // Case 5: 20 (local variable reassigned within function scope)
  }

  console.log("after if", localVar); // Case 6: 20 (function-scoped, same `localVar` as in `if` block)
}

testVar();

console.log("after function", globalVar); // Case 7: 100 (global variable still accessible but if we are re-declear inside the function so also it will not change the value outside of function )

try {
  console.log("outside of function", localVar); // Case 8: Error! (localVar is not accessible outside the function)
} catch (e) {
  console.log("Error:", e.message); // Case 8: Error message
}

var globalVar = 200; // Re-declaration of global variable is allowed with `var`

console.log(globalVar); // Case 9: 200 (global variable re-declared and updated)

console.log("****************** end var ********************************");

