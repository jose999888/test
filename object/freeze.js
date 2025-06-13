const obj = {
  a: 1,
  b: 2
}
Object.freeze(obj)
const desc = Object.getOwnPropertyDescriptor(obj,'a')
desc.writable = true
desc.configurable = true
obj.a = 3
console.log(obj)
console.log(desc)
console.log(Object.keys(obj))
console.log(Object.isFrozen(obj))


/**
 * 1. 当对象被冻结后，即使手动更改他的可配置性或者可写或者可枚举，这些值会改变，但是，不会生效
 *
 *
 * */