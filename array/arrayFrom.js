const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];

function NotArray(len) {
    console.log("NotArray called with length", len);
}

// 可迭代对象
console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
// 将参数给到NotArray实例
