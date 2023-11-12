//##############Immediately Invoked Function###################

// function chai(){
//     console.log(`DB Connect`)
// }

// chai()

(function chai(){
    console.log(`DB Connect`) // Named IIFE
})();

((name) => {
    console.log(`DB Connect,${name}`) // 
})('riju')