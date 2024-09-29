/*
3. Accessing Properties: Dot notation vs Bracket notation

    - In JavaScript, you can access the properties of an object in two primary ways: dot notation and bracket notation. Both methods achieve the same result but are used in different scenarios.
    
    - **Dot Notation**: This is the most common and readable way to access properties of an object. You simply use the object name followed by a dot and the property name. This approach is clear and straightforward, making it the preferred method for most cases.
    
        Example:
        console.log(person.name); // Accessing the 'name' property using dot notation
        
    - **Bracket Notation**: This method allows you to access object properties using a string as the property key. It is particularly useful in situations where the property name is dynamic (stored in a variable) or when the property name contains spaces or special characters that would not be valid in dot notation.
    
        Example:
        const propName = "age"; // Property name stored in a variable
        console.log(person[propName]); // Accessing the 'age' property using bracket notation
        
        - Bracket notation is also necessary when dealing with property names that are not valid identifiers, such as those that include spaces or start with numbers. For instance, if you had a property named "first name", you would need to use bracket notation to access it:
        
        console.log(person["first name"]); // Accessing a property with a space in its name using bracket notation
        
    - Both notations can be used interchangeably, but dot notation is generally preferred for its clarity and simplicity, while bracket notation provides flexibility in accessing properties dynamically or when dealing with unconventional property names.
*/

console.log(person.name);         // Dot notation: "John"
console.log(person['age']);       // Bracket notation: 30

// Using bracket notation when the property name is stored in a variable
const propName = 'name';
console.log(person[propName]);    // Bracket notation with a variable: "John"