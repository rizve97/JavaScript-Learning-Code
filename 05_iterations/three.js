//for of 

const arr = [1, 2, 3, 4, 5]

for (const value of arr) {
    //console.log(value)
    
}

const str = "Hello Everyone"

// for (const greet of str) {
//     console.log(`Every single character: ${greet}`)
//     if(greet == " "){
//         console.log("peye gechi")
//         break
//     }
    
// }

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('USA', "United States of America")
map.set('USA', "United States of America")
map.set('CA', "CANADA")

//console.log(map)

for (const [key, value] of map) {

    console.log(key, value)
    
}


const myobject ={

    "game1": "NFS",
    "game2": "Pokemon",
}

// for (const [key,value] of myobject) {

//     console.log(key, value)  //Not working
    
// }