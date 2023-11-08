const marvel_heros = ["Thor", "Spiderman"];
const dc_heros = ["Flash", "Batman"];
const heros = ["Batul", "Gopal_Bhar"];


//dc_heros.push(marvel_heros) ;
//console.log(dc_heros);

const all_heros = marvel_heros.concat(dc_heros); //This will return you a new array
//console.log(all_heros);

const all_new_heros= [...marvel_heros, ...dc_heros, ...heros];
//console.log(all_new_heros);

const another_array = [1, 2,[3, 4, [5,6] ] ];

const real_another_array = another_array.flat(Infinity); //This will return a new arrray with all
console.log(real_another_array);

console.log(Array.isArray("Riju"));
console.log(Array.from("Riju"));

let a = 100;
let b = 200;
let c = 300;
console.log(Array.of(a, b, c));