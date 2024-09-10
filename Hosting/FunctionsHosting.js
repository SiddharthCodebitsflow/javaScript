/*
**Function Hoisting with `var`, `let`, and `const` in JavaScript**

1. **Function Declarations:**
   - Function declarations are hoisted completely.
   - You can call the function before its definition, and both the function name and the function body are hoisted to the top of their scope.
   
2. **Function Expressions with `var`:**
   - With `var`, only the variable declaration is hoisted, not the function assignment.
   - This means that the variable is available (but undefined) before assignment. Calling it before initialization results in a `TypeError` since it is not yet assigned to a function.

3. **Function Expressions with `let` and `const`:**
   - For `let` and `const`, hoisting behaves differently.
   - These variables are not initialized before the declaration in their Temporal Dead Zone (TDZ). Trying to use them before declaration will throw a `ReferenceError`.
   - As with `var`, the function body is not hoisted.

4. **Arrow Functions with `var`, `let`, and `const`:**
   - Arrow functions behave similarly to function expressions regarding hoisting.
   - If declared with `var`, the variable is hoisted but not the function body, resulting in a `TypeError`.
   - If declared with `let` or `const`, accessing them before declaration results in a `ReferenceError`.

**Key Differences:**
- `var`: Hoists the variable declaration but not the function or arrow function assignment. The value remains `undefined` until assigned.
- `let` and `const`: Do not hoist variables to the top of their scope, and they exist in the Temporal Dead Zone until their declaration is reached.
*/

console.log(greet());  // Output: "Hello from function declaration!"

// 1. Function Declaration (Hoisted)
function greet() {
    return "Hello from function declaration!";
}

// 2. Function Expression with `var` (Only Declaration Hoisted)
try {
    console.log(sayGoodbye());  // Throws: TypeError: sayGoodbye is not a function
} catch (e) {
    console.log(e.message);
}

var sayGoodbye = function() {
    return "Goodbye from function expression with var!";
};

console.log(sayGoodbye());  // Output: "Goodbye from function expression with var!"

// 3. Function Expression with `let` (Not Hoisted)
try {
    console.log(sayHelloLet());  // Throws: ReferenceError: Cannot access 'sayHelloLet' before initialization
} catch (e) {
    console.log(e.message);
}

let sayHelloLet = function() {
    return "Hello from function expression with let!";
};

console.log(sayHelloLet());  // Output: "Hello from function expression with let!"

// 4. Function Expression with `const` (Not Hoisted)
try {
    console.log(sayHelloConst());  // Throws: ReferenceError: Cannot access 'sayHelloConst' before initialization
} catch (e) {
    console.log(e.message);
}

const sayHelloConst = function() {
    return "Hello from function expression with const!";
};

console.log(sayHelloConst());  // Output: "Hello from function expression with const!"

// 5. Arrow Function with `var` (Only Declaration Hoisted)
try {
    console.log(greetArrowVar());  // Throws: TypeError: greetArrowVar is not a function
} catch (e) {
    console.log(e.message);
}

var greetArrowVar = () => "Hello from arrow function with var!";
console.log(greetArrowVar());  // Output: "Hello from arrow function with var!"

// 6. Arrow Function with `let` (Not Hoisted)
try {
    console.log(greetArrowLet());  // Throws: ReferenceError: Cannot access 'greetArrowLet' before initialization
} catch (e) {
    console.log(e.message);
}

let greetArrowLet = () => "Hello from arrow function with let!";
console.log(greetArrowLet());  // Output: "Hello from arrow function with let!";

// 7. Arrow Function with `const` (Not Hoisted)
try {
    console.log(greetArrowConst());  // Throws: ReferenceError: Cannot access 'greetArrowConst' before initialization
} catch (e) {
    console.log(e.message);
}

const greetArrowConst = () => "Hello from arrow function with const!";
console.log(greetArrowConst());  // Output: "Hello from arrow function with const!";

/*
**Summary:**
- **Function Declarations**: Fully hoisted, meaning both the function name and body are available before the definition.
- **Function Expressions**:
  - Using `var`: Only the variable is hoisted, but it's undefined until assigned, causing a `TypeError` if called before assignment.
  - Using `let` and `const`: Not hoisted at all. Accessing them before declaration throws a `ReferenceError`.
- **Arrow Functions**:
  - Behave like function expressions. Only the variable is hoisted if `var` is used, but the function is not. When using `let` or `const`, trying to access them before declaration throws a `ReferenceError`.

The difference in behavior is mainly due to how `var`, `let`, and `const` handle hoisting and scoping.
*/
