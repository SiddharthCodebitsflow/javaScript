/*
8. Prototype and Prototypal Inheritance

    - **What is a Prototype?**
        - In JavaScript, every object has an internal property called `[[Prototype]]`. This prototype is another object from which the current object can inherit properties and methods.
        - Think of a prototype as a blueprint or template for an object. When you create an object, it automatically has access to properties and methods defined on its prototype.
        - Objects don't actually "copy" properties or methods from the prototype; they just have a reference to it. When you try to access a property on an object, if it doesn't exist on the object itself, JavaScript looks up the prototype chain to find it.

    - **Prototypal Inheritance**
        - Prototypal inheritance allows one object to inherit properties and methods from another object. In other words, it enables you to create "child" objects that inherit from a "parent" object.
        - Instead of using classes like in traditional OOP languages (like Java or C++), JavaScript uses prototypes to share behavior between objects.
        - This type of inheritance is more flexible because objects can inherit directly from other objects rather than through strict class hierarchies.

    - **Why Use Prototypal Inheritance?**
        - It promotes **code reuse**. Instead of writing the same method or property for each object, you can define it once on the prototype, and all instances will inherit it.
        - It also enables **performance optimization**. If multiple objects share the same methods, they don’t each need their own copy. Instead, they all reference a single method on the prototype.

    **Example**:
*/

function Person(name, age) {
    this.name = name;  // Instance-specific property
    this.age = age;    // Instance-specific property
}

// Adding a method to the prototype of the constructor function
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating new instances of Person
const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

// Accessing the greet method via the prototype
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.

/*
    - In this example:
        - `Person` is a constructor function. Each time you create a new person (e.g., `person1` or `person2`), it has its own `name` and `age` properties.
        - We add the `greet` method to `Person.prototype`, which means that it’s not recreated for every instance. Instead, both `person1` and `person2` share the same `greet` method. This saves memory and allows for better performance, especially when you create many instances.
        - **How It Works**:
            - When you call `person1.greet()`, JavaScript first checks whether `greet` exists directly on `person1`. If it doesn’t find it, it looks up the prototype chain and finds it on `Person.prototype`, then executes it.
            - This is called **prototype delegation**: if an object doesn’t have a certain property or method, JavaScript delegates the search to the prototype.

    - **Prototype Chain**:
        - Each object has a reference to its prototype, which in turn may have its own prototype. This creates a "chain" of objects, where each object looks up its prototype to find properties or methods it doesn’t have.
        - The end of this chain is `Object.prototype`, which is the default prototype from which all JavaScript objects inherit. If a property is not found on any prototype in the chain, `undefined` is returned.

    **Key Benefits of Prototypal Inheritance**:
    1. **Memory Efficiency**: Methods and properties that are shared between instances (like `greet`) are stored in the prototype, meaning they are not duplicated across every instance.
    2. **Code Organization**: Prototypes keep the instance-specific data (like `name` and `age`) separate from shared behavior (like `greet`), leading to better code organization.
    3. **Flexibility**: Prototypes allow objects to dynamically inherit methods and properties, even after they are created.

    **Prototype vs. `__proto__` vs. `.prototype`**:
    - Every object has an internal property called `[[Prototype]]`, often referred to as `__proto__` in modern JavaScript.
    - `Person.prototype` refers to the prototype object associated with the `Person` constructor function.
    - When you create a new instance of `Person`, that instance has its own `__proto__` property, which points to `Person.prototype`.

    In summary, prototypes are the foundation of JavaScript’s inheritance model, allowing objects to share behavior efficiently without duplicating methods for every instance.
*/
