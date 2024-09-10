// **************** Arithmetic Operators ****************
let a = 12;
let b = 5;

console.log(a + b);  // Addition: 12 + 5 = 17
console.log(a - b);  // Subtraction: 12 - 5 = 7
console.log(a * b);  // Multiplication: 12 * 5 = 60
console.log(a / b);  // Division: 12 / 5 = 2.4
console.log(a % b);  // Modulus: 12 % 5 = 2 (Remainder when 12 is divided by 5)
console.log(a ** 2); // Exponentiation: 12^2 = 144

// **************** Assignment Operators ****************
let x = 10;
x += 5;  // Equivalent to x = x + 5 (x = 10 + 5 = 15)
console.log(x);  // 15

x -= 3;  // Equivalent to x = x - 3 (x = 15 - 3 = 12)
console.log(x);  // 12

x *= 2;  // Equivalent to x = x * 2 (x = 12 * 2 = 24)
console.log(x);  // 24

x /= 4;  // Equivalent to x = x / 4 (x = 24 / 4 = 6)
console.log(x);  // 6

x %= 2;  // Equivalent to x = x % 2 (x = 6 % 2 = 0)
console.log(x);  // 0

// **************** Comparison Operators ****************
let y = 7;

console.log(y == '7');   // true, loose equality (compares value but not type)
console.log(y === 7);    // true, strict equality (compares value and type)
console.log(y != '8');   // true, loose inequality (compares value but not type)
console.log(y !== 8);    // true, strict inequality (compares value and type)
console.log(y < 10);     // true, 7 is less than 10
console.log(y <= 7);     // true, 7 is less than or equal to 7
console.log(y > 5);      // true, 7 is greater than 5
console.log(y >= 7);     // true, 7 is greater than or equal to 7

// **************** Logical Operators ****************
let z = true;
let w = false;

console.log(z && w);    // false, logical AND: both must be true
console.log(z || w);    // true, logical OR: at least one must be true
console.log(!z);        // false, logical NOT: inverts the boolean value

// **************** Bitwise Operators (mathematical explanation) ****************
let bitA = 5;  // Binary: 0101 (5 in decimal)
let bitB = 3;  // Binary: 0011 (3 in decimal)

// Bitwise AND (&): Compare each bit. Result is 1 only if both bits are 1.
console.log(bitA & bitB); // Output: 1
/*
   0101  (5 in binary)
&  0011  (3 in binary)
--------
   0001  (1 in decimal)
*/

// Bitwise OR (|): Compare each bit. Result is 1 if either bit is 1.
console.log(bitA | bitB); // Output: 7
/*
   0101  (5 in binary)
|  0011  (3 in binary)
--------
   0111  (7 in decimal)
*/

// Bitwise XOR (^): Compare each bit. Result is 1 if bits are different.
console.log(bitA ^ bitB); // Output: 6
/*
   0101  (5 in binary)
^  0011  (3 in binary)
--------
   0110  (6 in decimal)
*/

// Bitwise NOT (~): Inverts each bit (changes 1 to 0 and 0 to 1).
console.log(~bitA); // Output: -6 (two's complement)
/*
   0101  (5 in binary)
   ----
   1010  (Inverted to -6 in two's complement form)
*/

// Left shift (<<): Shifts bits to the left by the specified number of positions.
console.log(bitA << 1); // Output: 10
/*
   0101  (5 in binary)
<< 1
--------
   1010  (10 in decimal)
*/

// Right shift (>>): Shifts bits to the right, keeping the sign intact.
console.log(bitA >> 1); // Output: 2
/*
   0101  (5 in binary)
>> 1
--------
   0010  (2 in decimal)
*/

// Zero-fill right shift (>>>): Shifts bits to the right, filling left with 0s.
console.log(bitA >>> 1); // Output: 2
/*
   0101  (5 in binary)
>>> 1
--------
   0010  (2 in decimal)
*/

// **************** Ternary Operator ****************
let age = 18;
let isAdult = (age >= 18) ? "Adult" : "Not an Adult";
console.log(isAdult);  // Output: "Adult"

// **************** Typeof Operator ****************
let str = "Hello";
console.log(typeof str);  // Output: "string"

let num = 42;
console.log(typeof num);  // Output: "number"

let isTrue = true;
console.log(typeof isTrue);  // Output: "boolean"

let obj = {};
console.log(typeof obj);  // Output: "object"
