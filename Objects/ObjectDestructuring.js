

// 6. Object Destructuring
/*
    - Destructuring allows you to extract properties from objects into distinct variables.
    - This makes it easier to work with the properties of an object.

    Syntax:
    const { prop1, prop2 } = object;

    Example:
*/

const { brand, year } = car; // Extract `brand` and `year` from the car object
console.log(brand); // "Toyota"
console.log(year);  // 2020

// 7. Shorthand Properties
/*
    - Shorthand properties allow you to define object properties more concisely when the variable name matches the property name.

    Example:
*/
const firstName = "John";
const lastName = "Doe";

// Shorthand for defining object properties
const user = { firstName, lastName };
console.log(user); // {firstName: "John", lastName: "Doe"}                       