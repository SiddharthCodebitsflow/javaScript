// =====================
// 5. JavaScript Objects
// =====================

// 1. Object Literals
/*
    - Object literals are a simple way to create objects in JavaScript by using a comma-separated list of key-value pairs inside curly braces.
    - Objects in JavaScript are collections of properties and methods (functions attached to an object).

    Syntax:
    const obj = {
        key1: value1,
        key2: value2,
        ...
    };

    Example:
*/

const person = {
    name: "John",        // property
    age: 30,             // property
    greet: function() {  // method
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person); // Prints the entire object
person.greet();      // Calls the greet method: "Hello, my name is John"