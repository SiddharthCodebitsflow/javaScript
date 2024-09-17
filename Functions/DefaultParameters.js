/*

    ### Detailed Explanation:

    1. **Default Parameters Overview**:
    - Default parameters provide a way to set default values for function parameters. This ensures that if an argument is not supplied or is explicitly set to `undefined`, the parameter will still have a default value.

    2. **Internal Process**:
    - **Without Argument**: When a function is called without providing a specific argument, the parameter takes the default value specified.
    - **With Argument**: If an argument is provided, it overrides the default value.
    - **Explicit `undefined`**: Passing `undefined` explicitly will also use the default value, as it is treated as if no argument was provided.

    3. **Examples**:
    - **Simple Function**: The `greet` function uses `'Guest'` as the default value if no name is provided. It shows how default parameters handle various calling scenarios.
    - **Multiple Parameters**: The `multiply` function demonstrates how default values can be applied to multiple parameters, providing flexibility in function calls.

    4. **Benefits**:
    - **Simplified Logic**: Reduces the need for manual checks inside the function to determine if a parameter was provided.
    - **Code Clarity**: Makes it clear what the default values are, improving the readability and maintainability of the code.
    - **Versatility**: Allows functions to handle different numbers of arguments gracefully.

    This format provides a clear, step-by-step understanding of default parameters and how they are implemented in JavaScript functions.

*/

function greetDefault(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greetDefault());        // Output: Hello, Guest!
console.log(greetDefault("John"));  // Output: Hello, John!
