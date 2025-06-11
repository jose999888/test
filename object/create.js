const obj = {};
// 1. 使用 null 原型：没有继承的属性
const descriptor = Object.create({
    enumerable: true,
    writable: true,
    configurable: true,
});
descriptor.value = "static";
// descriptor.enumerable = true;

Object.defineProperty(obj, "key", descriptor);


console.log(descriptor)
// console.log(obj)

// console.log(Object.keys(obj))