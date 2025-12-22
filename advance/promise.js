// const promiseOne = new Promise(function (res,rej){
//     //Async Task
//     //DB calls, network calls, Cryptography functions

//     setTimeout(()=>{
//         console.log("Async task is complete")
//         res()
//     },2000)
// })

// promiseOne.then( function(){
//     console.log("Promise consume")
//     }
// )


// new Promise(function(res,rej){
//     setTimeout(()=>{
//         console.log(`async task 2`)
//         res()
//     },1000)
// }).then(()=>{
//     console.log(`hehe`)
// })


// const promiseThree = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res({
//             username: "ihba",
//             email: "ihba@gmail.com"
//         })
//     },2000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// }
// )


// const promiseFour = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let err = false or true

//         if (!err){
//             res({
//                 username:"ihba",
//                 password:"tiger"
//             })
//         }else{
//             rej(`ERROR`)
//         }
//     },1000)
// })

// const username = promiseFour.then(function (user){
//     console.log(user)
//     return user.username
// }).then(
//     function(username){
//         console.log(username)
//     }
// ).catch((err)=>{
//     console.log(err)
// }).finally(function(){
//     console.log(`Done!`)
// })

// console.log(username)



// async function getAPI() {
//     try{
//         const res = await fetch("https://api.github.com/users/hiteshchoudhary")
//         const data = await res.json()

//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }

// getAPI()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})
.catch(function(err){
    console.log(err)
})