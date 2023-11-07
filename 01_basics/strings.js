const name = "Rizve";
const Repo = 6;

//console.log(name, Repo);
//console.log(`My name is ${name} and my Repo count is ${Repo}`);

const some = new String('feenixlab.com')

//console.log(some);
//console.log(some[2]);
//console.log(some.length);
//console.log(some.indexOf('f'));

const newString = some.substring(0,4) ;
//console.log(newString);

const aanotherString = some.slice(-8,4);
//console.log(aanotherString);



const onString = "                 sdjbjdb        "
//console.log(onString)
//console.log(onString.trim());      // it will trim the unsual blank space

const url = "rizveahmed%20uddin.com"
//console.log(url.replace('%20', '-'));  //It will replace the unsual things 

//console.log(url.includes("kisu"));   // It will serach spefic elements in string


const vagString = "aaaa-bbbb-cccc-dddd";
console.log(vagString.split('-'));    // It will split the string based on (-) or space or (_) depend on programmer  