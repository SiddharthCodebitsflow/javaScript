

// 9. Constructor Functions
/*
    - A constructor function is a special function used to create and initialize objects.
    - By convention, constructor function names start with an uppercase letter.
    - The `new` keyword is used to create an instance of the object.

    Syntax:
    function ConstructorFunction(param1, param2) {
        this.prop1 = param1;
        this.prop2 = param2;
    }

    Example:
*/

function Person(name, age) {
    this.name = name;
    this.age = age;

    // Method
    this.introduce = function() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    };
}

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

person1.introduce(); // "Hi, I'm John and I'm 30 years old."
person2.introduce(); // "Hi, I'm Jane and I'm 25 years old."

/*
    - In this example:
        - `Person` is a constructor function.
        - The `new` keyword creates new instances of `Person`, and each object has its own `name` and `age` properties and `introduce` method.
*/

// Conclusion:
/*
    - JavaScript objects are incredibly flexible and form the basis of most data structures in JavaScript.
    - Object literals provide an easy way to create objects, while constructor functions and prototypes allow for more advanced features like inheritance.
    - Methods like `Object.keys()`, `Object.assign()`, and destructuring make it easier to work with and manipulate objects.
*/
