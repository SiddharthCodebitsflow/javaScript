/*
    Deep Explanation of `__proto__` vs `.prototype` in JavaScript

    In JavaScript, both `__proto__` and `.prototype` are crucial concepts for understanding 
    how inheritance works, but they have different roles.

    Let's dive deep into each one, using examples to clarify how they work.
*/

// 1. __proto__
/*
    - Every object in JavaScript has a hidden property called `__proto__`.
    - `__proto__` is a reference to the prototype object from which the current object 
      inherits properties and methods.

    - Think of `__proto__` as an "invisible link" to the object's prototype.

    Example:
*/

// Create an object 'animal'
const animal = {
    eats: true,
};

// Create another object 'dog' that inherits from 'animal'
const dog = {
    barks: true,
};

// Set the __proto__ of dog to animal (inheritance)
dog.__proto__ = animal;

// Now dog can access both its own properties and those from animal
console.log(dog.barks); // true  (from dog)
console.log(dog.eats);  // true  (inherited from animal via __proto__)
console.log(dog.__proto__ === animal);  // true

/*
    Explanation:
    - The `dog` object doesn't have an `eats` property directly.
    - When JavaScript tries to access `dog.eats`, it checks `dog.__proto__`, 
      which points to the `animal` object, and finds the `eats` property there.
    - `dog.__proto__ === animal` confirms that the prototype of `dog` is `animal`.
*/

// 2. .prototype
/*
    - `.prototype` is a property of constructor functions or classes.
    - When you create an object using a constructor function or a class, the object's 
      `__proto__` property is set to the `.prototype` of that constructor.
    - This allows all instances of the constructor to share methods and properties 
      defined on the `.prototype`.

    Example:
*/

function Person(name) {
    this.name = name;  // Instance-specific property
}

// Adding a shared method to Person.prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Create two instances of Person
const person1 = new Person("John");
const person2 = new Person("Jane");

person1.greet(); // Hello, my name is John
person2.greet(); // Hello, my name is Jane

// Verify that both instances share the same prototype
console.log(person1.__proto__ === Person.prototype); // true
console.log(person2.__proto__ === Person.prototype); // true

/*
    Explanation:
    - `Person.prototype` contains the `greet` method, which both `person1` and `person2` can use.
    - The objects `person1` and `person2` don't have their own `greet` methods. Instead, their
      `__proto__` points to `Person.prototype`, which contains the shared `greet` method.
*/

// 3. Key Differences Between `__proto__` and `.prototype`
/*
    - **__proto__**:
        - Every object in JavaScript has a `__proto__` property.
        - It points to the prototype object from which the object inherits properties.
        - Used for prototypal inheritance (delegating properties and methods).

    - **.prototype**:
        - `.prototype` is a property of **constructor functions** or **classes**.
        - It's where you define shared methods and properties for all instances of a constructor function.
        - When you create an object using `new Constructor()`, the object's `__proto__` is set to the constructor's `.prototype`.

    Think of `__proto__` as the mechanism that allows objects to inherit properties, 
    while `.prototype` is the blueprint that holds the shared methods for instances 
    created from a constructor function.

    Example:
*/

// Create a constructor function for Animals
function Animal(name) {
    this.name = name;
}

// Add a method to Animal.prototype
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

// Create an instance of Animal
const cat = new Animal('Whiskers');

// cat has access to the speak method via its __proto__
cat.speak();  // Output: Whiskers makes a sound

// cat.__proto__ points to Animal.prototype
console.log(cat.__proto__ === Animal.prototype);  // true

/*
    In this example:
    - `Animal.prototype` contains the shared method `speak`.
    - The object `cat` doesn't have the `speak` method directly on it. 
      Instead, JavaScript looks at `cat.__proto__`, which points to `Animal.prototype`, 
      where the method is defined.
    - When you call `cat.speak()`, it checks `cat.__proto__` to find the `speak` method.
*/

// 4. Extending Prototypes
/*
    You can dynamically add methods to an existing prototype, which is particularly 
    useful for adding shared methods without modifying the original constructor.

    Example:
*/

function Vehicle(type) {
    this.type = type;
}

// Initially, Vehicle.prototype doesn't have a method
const car = new Vehicle("Car");
console.log(car.__proto__);  // Only has the default Object methods

// Dynamically add a method to Vehicle.prototype
Vehicle.prototype.drive = function() {
    console.log(`${this.type} is driving.`);
};

// Now car can use the newly added method
car.drive();  // Output: Car is driving.

/*
    Explanation:
    - Even though `car` was created before the `drive` method was added to `Vehicle.prototype`,
      it can still access the new method because its `__proto__` points to `Vehicle.prototype`.
    - Prototypes are dynamic, meaning you can add methods at any time, and all instances will
      immediately gain access to those methods through their `__proto__`.
*/

// 5. Visualizing the Prototype Chain
/*
    JavaScript objects form a chain of prototypes, where each object can delegate property access 
    to its prototype.

    Let's visualize this with an example:

    - The object `dog` inherits from `animal` via `__proto__`.
    - `animal` inherits from `Object.prototype`.
    - If you try to access a property on `dog`, and it doesn’t have that property, JavaScript
      will go up the chain to `animal`, and if it still doesn’t find the property, it will check `Object.prototype`.

    Example:
*/

console.log(dog.hasOwnProperty('barks'));  // true (inherited from Object.prototype)
console.log(dog.toString());               // [object Object] (inherited from Object.prototype)

/*
    Here, `dog` can use the `hasOwnProperty` and `toString` methods, which are defined on `Object.prototype`,
    because its prototype chain leads up to `Object.prototype`.
*/

/*
    Summary:
    - **`__proto__`** is the internal property that links an object to its prototype.
    - **`.prototype`** is the object attached to constructor functions, where shared methods are defined.
    - They both play essential roles in JavaScript’s inheritance system, allowing objects to share properties and methods efficiently.
*/
