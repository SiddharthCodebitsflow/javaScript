/*
6. Rest Parameters:
   - Collects all remaining arguments into an array.
   - Syntax: `function(...args) { ... }`
*/

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
