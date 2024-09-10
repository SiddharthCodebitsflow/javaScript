/*
5. Default Parameters:
   - Allow parameters to have a default value if no argument is passed or `undefined` is passed.
   - Syntax: `function(param = defaultValue) { ... }`
*/

function greetDefault(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greetDefault());        // Output: Hello, Guest!
console.log(greetDefault("John"));  // Output: Hello, John!
