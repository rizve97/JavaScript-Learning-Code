const sym = Symbol("key1");

const obj = {

    name: "Rizve",
    "full name": "Rizve Ahmed",
    age: 20,
    [sym] : "mykey1",
    email: "rizveahmed@gmail.com",
    phone : 01864954226,

}

// console.log(obj.age);
// console.log(obj.email);
// console.log(obj[sym]);
// console.log(typeof obj[sym]);

// Object.freeze(obj);
obj.email = "riju@gmail.com"
// console.log(obj.email);

// console.log(obj);

obj.greeting = function(){

   console.log("Hello Frontman");

}
obj.greetingtwo = function(){

    console.log(`Hello Frontman, ${this.name}` );
 
 }

console.log(obj.greeting());
console.log(obj.greetingtwo());