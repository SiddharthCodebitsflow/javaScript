

/*

In JavaScript, the Set object is used to store unique values of any type, whether primitive values or object references. 
Here are some reasons why you might use a Set:

1. Uniqueness of Elements

    let numbers = new Set([1, 2, 3, 4, 4, 5]);
    console.log(numbers); // Output: Set(5) { 1, 2, 3, 4, 5 }


2. Efficient Membership Checking

    let fruits = new Set(['apple', 'banana', 'mango']);
    console.log(fruits.has('banana')); // true

3. Automatic Deduplication

    let arr = [1, 2, 2, 3, 4, 4];
    let uniqueValues = [...new Set(arr)];
    console.log(uniqueValues); // [1, 2, 3, 4]

4. Set Operations

    i. Union: Combine two sets without duplicates.

        let setA = new Set([1, 2, 3]);
        let setB = new Set([3, 4, 5]);
        let union = new Set([...setA, ...setB]);
        console.log(union); // Set {1, 2, 3, 4, 5}
    ii Intersection: Get common elements between two sets.

        let intersection = new Set([...setA].filter(x => setB.has(x)));
        console.log(intersection); // Set {3}

    iii Difference: Get elements present in one set but not the other.

        let difference = new Set([...setA].filter(x => !setB.has(x)));
        console.log(difference); // Set {1, 2}

5. Iterables and Spread Syntax

    let set = new Set([1, 2, 3]);
    let arrFromSet = [...set];  // Convert Set to Array
    console.log(arrFromSet);    // [1, 2, 3]


Use Cases:
        i.   Removing duplicates from arrays.
        ii.  hecking for the existence of an item in a collection.
        iii. Performing set operations like union, intersection, and difference.
            Maintaining collections where uniqueness is important (e.g., storing unique tags or identifiers).

*/



let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate value, will be ignored
console.log(set.has(1)); // tru
console.log(set.size); // 2

let arr1=[1,2,3,4,5,3,3,3,4,5,6,6,3,2];
console.log([...new Set([...arr1])]);