

// 5. Object Methods: `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.assign()`
/*
    - JavaScript provides several built-in methods to work with objects.

    1. `Object.keys(obj)`: Returns an array of the object's own enumerable property names (keys).
    2. `Object.values(obj)`: Returns an array of the object's own enumerable property values.
    3. `Object.entries(obj)`: Returns an array of key-value pairs from the object.
    4. `Object.assign(target, source)`: Copies all properties from the source object(s) to the target object, creating a new object.

    Examples:
*/

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(Object.keys(car));   // ["brand", "model", "year"]
console.log(Object.values(car)); // ["Toyota", "Corolla", 2020]
console.log(Object.entries(car)); // [["brand", "Toyota"], ["model", "Corolla"], ["year", 2020]]

const additionalInfo = { color: "blue", mileage: 15000 };
const updatedCar = Object.assign({}, car, additionalInfo);
console.log(updatedCar); // {brand: "Toyota", model: "Corolla", year: 2020, color: "blue", mileage: 15000}