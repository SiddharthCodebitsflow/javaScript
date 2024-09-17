/*

    ### Detailed Explanation:

    1. **Rest Parameters Overview**:
    - Rest parameters (`...args`) allow you to capture and work with an arbitrary number of arguments passed to a function. This is useful for functions where the number of inputs can vary.

    2. **How They Work**:
    - **Collection**: When you call a function with multiple arguments, the rest parameter collects these arguments into an array.
    - **Processing**: You can then use array methods to handle the collected arguments, such as summing them up or performing other operations.

    3. **Example Walkthrough**:
    - **Function Definition**: The `sum` function uses `...numbers` to collect all arguments.
    - **Summing Values**: `numbers.reduce((acc, num) => acc + num, 0)` processes the array to calculate the total sum.
    - **Usage**: Calling `sum(1, 2, 3, 4)` demonstrates how multiple arguments are handled and summed.

    By following this format, you get a clear understanding of how rest parameters work and how they can be used effectively in functions.

*/

// Function to sum all arguments using rest parameters
function sum(...numbers) {
    // `numbers` is an array containing all arguments passed to the function
    // The `reduce` method is used to accumulate the sum of all elements
    // `acc` is the accumulator which starts at 0
    // `num` represents each element in the `numbers` array
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Example usage of the `sum` function
console.log(sum(1, 2, 3, 4));  // Output: 10
// Explanation: The function `sum` is called with four arguments: 1, 2, 3, and 4.
// These arguments are collected into the `numbers` array and summed up using `reduce()`.

