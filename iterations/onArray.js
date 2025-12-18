//  const arr = [1,2,3,4,5]

// for( const num of arr){
//     console.log(num);
// }

// const str = "ihba"

// for(const ch of str){
//     console.log(ch)
// }

// maps

// const newMap = new Map()
// newMap.set("in","India")
// newMap.set("us","USA")
// newMap.set("uk","UK")
// newMap.set("Fr","France")

// for(const key of newMap){
//     console.log(key)
// }
// for(const [key,value] of newMap){
//     console.log(key,":",value) // in : India , us : USA
// }

// newMap.forEach((key,value)=>{
//     console.log(key,value) // India in , USA us
// })


// const myObj = {
//     js: "javascript",
//     cpp: "c++",
//     py: "python",
//     rb: "ruby",
//     cs: "c #"
// }

// for ( const key in myObj){
//     console.log(`${key} => ${myObj[key]}`)
// }

// for (const key in arr){
//     console.log(key);
// }

// for (const key in newMap){
//     console.log(key) // will not work because map is not iterable
// }

// const myArr = ["js","rb","py","java","cpp"]

// myArr.forEach((item,index,arr)=>{
//     console.log(item, index, arr)
// })

const coding = [
    {
        langName : "javascript",
        langExt :"js"
    },
    {
        langName : "java",
        langExt : "java"
    },
    {
        langName: "python",
        langExt: "py"
    }
]

coding.forEach((item)=>{
    console.log(`${item.langName}.${item.langExt}`)
})