const myNums = [2,1,4,3,5,6,7,9,8,10]

// const newNums = myNums.filter((num) => num > 4)

// console.log(newNums)

//const newArr = myNums.map((num) => num + 10)
// const newArr = myNums.map((num) => {
//     return num - 1
// })

// console.log(newArr)

// Chaining

// const newNums = myNums.map( (num) => num * 10).map( (num) => num + 1)
// console.log(newNums)

// const newArr = newNums.map( (num) => num - 1).filter((num) => num <= 50)
// console.log(newArr)

// Reduce

const initalValue = 0
const sum = myNums.reduce( (acc,cur) => acc+cur,initalValue)
console.log(sum)