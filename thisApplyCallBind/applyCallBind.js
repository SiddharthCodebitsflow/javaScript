/*
`call()`, `apply()`, and `bind()` are methods available on functions in JavaScript
that allow you to control the value of `this` when a function is executed.

1. `call()`
`call()` immediately invokes the function and allows you to specify the `this` context
and pass arguments one by one.
*/

function greetWithCall(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// Using `call()` to set `this` to `person1` and pass arguments
greetWithCall.call(person1, "Hello");  // Output: "Hello, Alice"

// Using `call()` to set `this` to `person2` and pass arguments
greetWithCall.call(person2, "Hi");     // Output: "Hi, Bob"

/*
2. `apply()`
`apply()` is similar to `call()`, but arguments are passed as an array.
*/

function greetWithApply(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

// Using `apply()` to set `this` to `person1` and pass arguments as an array
greetWithApply.apply(person1, ["Hello", "!"]);  // Output: "Hello, Alice!"

// Using `apply()` to set `this` to `person2` and pass arguments as an array
greetWithApply.apply(person2, ["Hi", "."]);     // Output: "Hi, Bob."

/*
3. `bind()`
`bind()` does not execute the function immediately. Instead, it returns a new function
with `this` bound to the specified context. You can also pass initial arguments.
The new function can be called later.
*/

function greetWithBind(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

// Using `bind()` to create a new function with `this` bound to `person1`
const greetPerson1 = greetWithBind.bind(person1);
greetPerson1("Hello");  // Output: "Hello, Alice"

// Using `bind()` to create a new function with `this` bound to `person2`
const greetPerson2 = greetWithBind.bind(person2);
greetPerson2("Hi");     // Output: "Hi, Bob"
