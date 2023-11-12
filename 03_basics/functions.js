

 function some(){

    console.log("R");
    console.log("I");
    console.log("Z");
    console.log("V");
    console.log("E");
}
//some()

// function addTwonumbers(num1, num2){

//     console.log(num1 + num2);
// }

// addTwonumbers(2,3)

// function addTwonumbers(num1, num2){

//     let result = num1 + num2;
//     return result;
// }
// const result = addTwonumbers(2,3);
// // console.log("Result:",result);

// function userLogin(userName){

//     return `${userName}, just logged in`;
// }

// console.log(userLogin("Rizve"));



// function calculatePrice(...val){
       
//       return val;

// }
//console.log(calculatePrice(100, 200, 300, 400))


const object = {

    name: "riju",
    phone : 0171554964,
    email : "rijuagmed@gmail.com",
}

function func(myobject){
    console.log(`user name is ${object.name} and phone number is ${object.phone}`)

}


func(object)

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


