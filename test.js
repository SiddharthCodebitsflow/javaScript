// const person = {
//     name: "John",        // property
//     age: 30,             // property
//     greet: function() {  // method
//         console.log(`Hello, my name is ${this.name}`);
//         console.log(this);
//     }
// };
// console.log(person.greet());


// class Animal{
//     constructor(name){
//         this.name=name;
//     }

//     get getter() {
//         console.log("this",this);
//     }
// }

// new Animal("sidd").getter;


// const animal={
//     name:"Any animal name"
// }
// const dog={
//     barks:true,
// }

// animal.__proto__=dog;
// console.log(animal.__proto__,dog.prototype);


function Animal(name){
    this.name=name;
    console.log(name);
}
Animal.prototype["hello"]="siddharth";
Animal.prototype['last']="data";
console.log(new Animal("kumar"));

const data={
    dog:"animal"
}

Animal.prototype.__proto__=data;
const proto=Animal.prototype;

console.log(proto.dog);

console.log(Animal.prototype.__proto__);