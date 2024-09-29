// =====================
// Control Structures in JavaScript
// =====================

// 1. `if`, `else if`, `else` statements
/*
    - The `if` statement allows you to execute a block of code if a certain condition is true.
    - `else if` is used to add additional conditions to check if the first condition in `if` is false.
    - The `else` block is executed when none of the conditions are true.
    - This provides flexibility when we need to make decisions based on multiple scenarios.

    Syntax:
    if (condition) {
        // Code to execute if condition is true
    } else if (anotherCondition) {
        // Code to execute if anotherCondition is true
    } else {
        // Code to execute if no conditions are true
    }

    Example:
*/

let num = 10;

if (num > 10) {
    console.log("Number is greater than 10");
} else if (num < 10) {
    console.log("Number is less than 10");
} else {
    console.log("Number is exactly 10");
}

/*
    - In the above code:
        - The `if` statement checks if `num` is greater than 10.
        - If false, the `else if` checks if `num` is less than 10.
        - If neither is true, the `else` block executes (since `num` is exactly 10).
*/

// 2. `switch` statement
/*
    - The `switch` statement is used to perform different actions based on the value of a single expression (usually a variable).
    - It is an alternative to multiple `if...else if` statements and can be more readable when dealing with many potential values.
    - Each `case` represents a possible value, and `break` is used to exit the switch after a matching case is found.
    - The `default` case executes if no matching case is found.

    Syntax:
    switch (expression) {
        case value1:
            // Code to execute if expression === value1
            break;
        case value2:
            // Code to execute if expression === value2
            break;
        default:
            // Code to execute if no cases match
    }

    Example:
*/

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
        break;
}

/*
    - In this example:
        - The variable `day` is compared with each case.
        - Since `day` equals 3, the block for "Wednesday" is executed.
        - The `break` statement ensures that the code stops executing further cases.
        - If no cases match, the `default` block runs.
*/

// 3. `for` loop
/*
    - The `for` loop is commonly used when the number of iterations is known.
    - It contains three parts: initialization, condition, and increment/decrement.
    - The loop runs as long as the condition is true, executing the code within the block each time.

    Syntax:
    for (initialization; condition; increment/decrement) {
        // Code to run on each loop iteration
    }

    Example:
*/

for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

/*
    - In this example:
        - The loop starts with `i = 0` (initialization).
        - It runs as long as `i < 5` (condition).
        - After each iteration, `i++` increments `i` by 1.
        - This prints the values of `i` from 0 to 4.
*/

// 4. `while` loop
/*
    - The `while` loop runs as long as the specified condition remains true.
    - The condition is evaluated before each iteration, so if the condition is false initially, the loop won’t run at all.

    Syntax:
    while (condition) {
        // Code to execute while condition is true
    }

    Example:
*/

let counter = 0;
while (counter < 5) {
    console.log(`Counter is ${counter}`);
    counter++;
}

/*
    - In this example:
        - The `while` loop runs as long as `counter < 5` is true.
        - Each iteration increments the `counter` by 1.
        - The loop prints values of `counter` from 0 to 4.
*/

// 5. `do...while` loop
/*
    - The `do...while` loop is similar to the `while` loop, but the code block is executed at least once before the condition is checked.
    - This ensures that the code runs at least once, even if the condition is false from the beginning.

    Syntax:
    do {
        // Code to run at least once
    } while (condition);

    Example:
*/

let doCounter = 0;
do {
    console.log(`Do counter is ${doCounter}`);
    doCounter++;
} while (doCounter < 3);

/*
    - In this example:
        - The `do` block runs once, even though the `doCounter` starts at 0.
        - After each iteration, the `while` checks the condition.
        - The loop stops once `doCounter` reaches 3.
*/

// 6. `break` and `continue` statements
/*
    - `break`: Immediately exits the loop, terminating further iterations.
    - `continue`: Skips the current iteration and moves to the next one, continuing the loop.

    Syntax for `break`:
    if (condition) {
        break; // Exits the loop
    }

    Syntax for `continue`:
    if (condition) {
        continue; // Skips to the next iteration
    }

    Examples:
*/

// Using `break` to exit a loop early:
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Loop ends when i equals 3
    }
    console.log(`Break example: ${i}`);
}

// Using `continue` to skip an iteration:
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skips the iteration when i equals 2
    }
    console.log(`Continue example: ${i}`);
}

/*
    - In the `break` example:
        - The loop stops completely once `i` equals 3, and no further iterations occur.
    - In the `continue` example:
        - The loop skips the iteration when `i` equals 2, but continues running for other values.
*/

// 7. `try...catch...finally` for error handling
/*
    - `try`: Defines a block of code to be tested for errors.
    - `catch`: Defines a block of code to handle any errors that occur in the `try` block.
    - `finally`: Defines a block of code that runs after `try` and `catch`, regardless of whether an error occurred.

    Syntax:
    try {
        // Code that may cause an error
    } catch (error) {
        // Code to handle the error
    } finally {
        // Code that runs regardless of success or failure
    }

    Example:
*/

try {
    let a = 10;
    let b = 0;

    // This condition will throw an error
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }

    let result = a / b;
    console.log(result);
} catch (error) {
    // Handle the error
    console.log(`Error: ${error.message}`);
} finally {
    // This block will always execute
    console.log("Execution completed.");
}

/*
    - In this example:
        - The `try` block checks if `b` is 0, and throws an error if true.
        - The `catch` block catches the error and prints the error message.
        - The `finally` block runs regardless of whether an error occurred.
*/
