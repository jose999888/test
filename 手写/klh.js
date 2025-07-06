// 不固定参数，遇到()执行

// function curry(fn){
//     let res = []

//     return function curried(...args){
//         if(args.length === 0){
//             const r = fn(...res)
//             res = []
//             return r
//         }else{
//             res.push(...args)
//             return curried
//         }
//     }
// }

// function add(...nums) {
//   return nums.reduce((pre,cur)=>pre+cur,0)
// }

// const curriedAdd = curry(add)

// const fir = curriedAdd(1)
// console.log("🚀 ~ fir:", fir(2))


// 固定参数执行结果，柯里化
function curry(fn) {
  return function curried(...args) {
    console.log("🚀 ~ args:", args)
    
    if (args.length >= fn.length) {
      // 参数足够，执行原函数
      return fn(...args)
    } else {
      // 参数不够，返回一个新函数，继续收集参数
      return function (...nextArgs) {
        console.log("🚀 ~ nextArgs:", nextArgs)
        return curried(...args, ...nextArgs)
      }
    }
  }
}
function add(a, b, c,d) {
  return a + b + c + d
}

const curriedAdd = curry(add)
const fir = curriedAdd(1)(2)

console.log(fir(3))    
