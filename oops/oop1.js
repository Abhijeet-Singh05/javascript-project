// const user = {
//     username: "ihba",
//     loggedIN: true,


//     getUserDetails: function(){
//         // console.log(`${this.username} is logged in`)
//         // console.log(this)
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails())



// function User(username,loggedIN){
//     this.username = username;
//     this.loggedIN = loggedIN;

//     return this

// }

// const userOne = User("ihba",true)
// const userTwo = User("teej",false)
// console.log(userOne)


function User(username,loggedIN){
    this.username = username;
    this.loggedIN = loggedIN;

    return this

}

const userOne = new User("ihba",true)
const userTwo = new User("teej",false)
console.log(userOne.constructor)
console.log(userTwo.username)