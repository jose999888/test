const obj = {
    name: 'jose',
    age: 18,
}
obj.male = 'boy'

Object.preventExtensions(obj)
const desc = Object.getOwnPropertyDescriptor(obj,'name')
obj.giht = '11'

console.log(desc)
console.log(obj)
console.log(Object.isExtensible(obj))
console.log(Object.keys(obj))


/**
 * 1. 这个方法的作用是，使对象变得不可添加
 * 2. 可以删除，原值可写的话可以重新赋值
 * 3. 在这个方法调用后，改变原来值的可写与可配置,可枚举 是无效的，值 会生效，但是效果不生效
 *
 * */