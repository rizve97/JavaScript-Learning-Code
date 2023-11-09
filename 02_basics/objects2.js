const tinderUser = {}

tinderUser.name = "Riju"
tinderUser.id = 456
tinderUser.email = "riju@mail.com"

//console.log(tinderUser);

const regularUser = {

      name: "Rupok",
      user:{
        userFullName:{
          mainName:  {
            firstName: "Rizve",
            lastName: "Ahmed",
            }
        }
      }
}

//console.log(regularUser.user)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

//const obj3 = Object.assign({}, obj1, obj2);  //It will combine all objects toghther
const obj3 = {...obj1, ...obj2, ...obj4}  // 90% time we will use this syntax.
//console.log(obj3);

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("kala")); // To check the property









