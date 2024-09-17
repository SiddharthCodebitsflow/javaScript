/*

### Detailed Explanation:

1. **Spread Operator Overview**:
   - The spread operator (`...`) is a convenient way to expand or "spread" the elements of an iterable (like an array or string) into separate elements.

2. **How It Works**:
   - **Expanding Elements**: When you use `...arr1`, it takes all elements of `arr1` and "spreads" them out. For example, `...arr1` results in `1, 2, 3`.
   - **Combining Arrays**: By spreading elements from multiple arrays, you can combine them into a single array easily.

3. **Example Walkthrough**:
   - **Arrays Example**: `const mergedArray = [...arr1, ...arr2]` merges the elements of `arr1` and `arr2` into a new array.
   - **Strings Example**: `const newArray = [...chars, ...string]` shows how to spread characters from a string into an array.

4. **Benefits**:
   - **Concise and Readable**: The spread operator provides a more readable and concise syntax compared to older methods.
   - **Creates New Arrays**: It doesn't alter the original arrays but creates a new array.
   - **Flexible Usage**: Can also be used with strings, sets, and other iterable objects.

By following this format, you gain a clear understanding of how the spread operator works, its usage, and its benefits in various scenarios.

*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Using the spread operator to merge arrays
const mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
