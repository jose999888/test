
/*
*
* 满足条件分进restock对象
* 不满足条件分进另一个对象
*
* **/
const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 9 },
    { name: "bananas", type: "fruit", quantity: 5 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 12 },
    { name: "fish", type: "meat", quantity: 22 },
];
// const a = Symbol('a')
// const b = Symbol.for('a')
const result = Object.groupBy(inventory, ({ quantity }) =>
    quantity < 6 ? "restock" : "sufficient",
);
console.log(result);
// [{ name: "bananas", type: "fruit", quantity: 5 }]
