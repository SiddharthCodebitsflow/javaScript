/*
7. Spread Operator:
   - Expands elements of an iterable (like an array) into individual elements.
   - Syntax: `...iterable`
*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Using the spread operator to merge arrays
const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
