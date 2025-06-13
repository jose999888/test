const object1 = {
    property1: 42,
};

Object.seal(object1);
console.log(object1.property1);

delete object1.property1; // Cannot delete when sealed
const descriptor = Object.getOwnPropertyDescriptor(object1, 'property1');
descriptor.enumerable = false;
delete object1.property1;
object1['property2'] = 33;

console.log(descriptor);
console.log(object1);
console.log(Object.keys(object1));


/**
 * 1. 这个方法使对象变得不可添加不可删除，原来的值可写那就可写，不可以那就不可以
 * 2. 一样，三个属性，值会改变，但是，不生效
 * */