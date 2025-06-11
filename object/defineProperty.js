const obj = {
    name1:'jose',
    name2:'roger'
}
Object.defineProperty(obj,'fullName',{
    get(){
        return this.name1 + this.name2
    },
    set(value){
        const [name1,name2] = value
        this.name1 = name1
        this.name2 = name2
    },
    enumerable:true,
    configurable:false,
    // writable:false,  当有get 或者 set的时候，就不能存在writable和value，会报错
    // value: 'jose roger'
})
Object.defineProperty(obj,'xuni',{
    value: undefined, //值
    enumerable: false, // 可枚举，就是可以被遍历打印
    writable: true, // 可以赋值操作
    configurable: true, //为false的时候不能删除
})

console.log(obj.fullName)
obj.xuni = 1111
console.log(obj)
