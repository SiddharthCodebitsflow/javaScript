

// 4. `this` Keyword
/*
    - The `this` keyword refers to the current object on which a method is being called.
    - Inside methods, `this` points to the object to which the method belongs.
    
    Example:
    - In the `greet` method of the `person` object, `this.name` refers to `person.name`.



    /*
In JavaScript, the `this` keyword is a special identifier that refers to the current execution context, which can vary depending on how a function is called. When you define a method within an object, like the `greet` method in our `person` object, the context of `this` inside that method refers to the object that the method is called on. 

In this example:

1. **Object Definition**:
   - We define an object named `person` with properties `name` and `age`, and a method `greet`.
   - The `name` property has the value "John", and the `age` property has the value 30.

2. **Using `this` in Methods**:
   - Inside the `greet` method, we use `this.name`. Here, `this` refers to the `person` object itself because the `greet` method is invoked on that object.
   - When we call `person.greet()`, JavaScript automatically sets `this` to the object that is calling the method, which in this case is `person`.

3. **Accessing Object Properties**:
   - Therefore, `this.name` effectively translates to `person.name`. This allows us to access the properties of the object directly within its methods without having to reference the object by name repeatedly.
   - The use of `this` makes our method more flexible and reusable, as it can be called on different instances of objects without hardcoding the object name.

4. **Function Invocation**:
   - When we execute `person.greet()`, it prints `Hello, my name is John`, demonstrating that the method is correctly accessing the `name` property of the `person` object via `this`.

In summary, the `this` keyword in JavaScript allows methods to refer to the object they belong to, enabling easy access to properties and methods of that object. This is crucial for object-oriented programming as it allows for better encapsulation and modular design of code.
*/

const anotherPerson = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

anotherPerson.greet(); // "Hello, my name is Alice"
// `this.name` refers to `anotherPerson.name`