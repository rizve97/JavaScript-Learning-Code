const user = {

    username: "Rizve",
    price: 999,

    welcometext: function(){
        console.log(`${this.username}, welcome here`)
        console.log(this)
    }
}

// user.welcometext()
// user.username = "riju"
// user.welcometext()
//console.log(this)

// function chai(){
   
//     let naam = "dnfdn"
//     console.log(this.naam)
   

// }
// chai()\


// const chai = function(){
//     let naam = "dnfdn"
//     console.log(this.naam)

// }
// chai()

// const chai = ()=> {
//     let naam = "dnfdn"
//     console.log(this.naam)

// }
// chai()


// const yoo = (num1, num2) => {
//      return num1 + num2;
// }

// console.log(yoo(4, 4))


// const yoo = (num1, num2) => (num1 + num2)


// console.log(yoo(4, 42))

const yoo = (num1, num2) => ({username: "hitesh"})


console.log(yoo(4, 42))