//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const yoo = ""

const id = Symbol('123')
const kisu = Symbol("123")
const anotherId = Symbol('123')

//console.log(id === kisu);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions


const birds = ["Doyel", "Chourui", "Tia"];
const heros = ["superman", "spiderman", "hulk"];



let rijuObj =  {
    name: "Riju",
    age: 27,
}

let myObj = {
    name: "riju",
    age: 27,
}




const myFunction = function(){
    console.log("Hello world");
}

const rijufunc = function(){
    console.log("Hey")
}

const riicfunc = function(){
    console.log("Hola");
}




//console.log(typeof yoo);

// https://262.ecma-international.org/5.1/#sec-11.4.3 
//###In this side we can find the different datatypes






//#####################################

// Stack(primitive) and Heap(Non-primitive)


let name = "Zohad Reza Chowdhury";

let name2 = name;
name2 = "Avoid Rafa";

//console.log(name2);
//console.log(name);


let user = {
    email: "riju@gmail.com",
    phone: "01712263787",
    address: "mohakhali",
}

let user1 = user;

user.email = "change@gmail.com";

console.log(user.email);
console.log(user1.email);