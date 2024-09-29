

/*
2. Properties and Methods

    - In JavaScript, objects are collections of key-value pairs. Each key is a property name, and each value can be any valid JavaScript data type, including other objects, arrays, functions, etc.
    
    - Properties represent the attributes or characteristics of an object. For example, in a `person` object, properties might include `name`, `age`, and `height`. Each of these properties holds specific data related to that person.
    
    - Methods are functions that are associated with an object. They are defined as properties that hold a function as their value. This allows the object to perform actions or behaviors related to itself. For example, a `greet` method in a `person` object might display a greeting message, incorporating the `name` property.
    
    - You can define properties and methods directly within an object literal when creating the object. This provides a straightforward way to encapsulate both data and behavior in a single entity, allowing for organized and modular code.

    Example (using the `person` object):
    - In the following example, we define a `person` object with two properties (`name` and `age`) and one method (`greet`): */
    
    const person = {
        name: "John",            // property: holds the person's name
        age: 30,                 // property: holds the person's age
        greet: function() {      // method: a function that logs a greeting
            console.log(`Hello, my name is ${this.name}`); // Uses 'this' to access the object's property
        }
    };

    /*
    - In this example:
        - `name` and `age` are properties that store the values associated with the `person` object.
        - `greet` is a method that, when called, executes a function that uses the `this` keyword to access the `name` property and display a greeting message in the console.
*/