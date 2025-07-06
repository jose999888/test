

class MySet{
    // #代表私有，可用也可不用
    #_data = []
    constructor(data){
        for (const item of data) {
            this.add(item)
        }
    }
    add(value){
        if(this.has(value)) return this
        this.#_data.push(value)
        return this
    }
    has(value){
        return this.#_data.some(item=>Object.is(item,value))
    }
    get size(){
        return this.#_data.length
    }
    get value(){
        return this.#_data
    }
    clear(){
        this.#_data = []
    }
    delete(value){
        const index = this.#_data.indexOf(value)
        if(index === -1) return false
        this.#_data.splice(index,1)
        return true
    }
    _isIterator(obj){
        return (
            obj&&obj[Symbol.iterator] && typeof obj[Symbol.iterator] === 'function'
        )
    }
    // 生成器函数
    *[Symbol.iterator](){
        for (const item of this.#_data) {
            yield item
        }
    }
}


const set1 = new Set([1,2,1])

for (let i = 0; i < 1_000_000; i++) {
  set1.add(i);
}
console.time('nativeSet1');
console.log(set1.has(55555))

console.timeEnd('nativeSet1'); 

const myset = new MySet([1,2,3,4,1])


console.time('nativeSet2');
console.log("🚀 ~ myset:", myset.value)
console.timeEnd('nativeSet2'); // 几乎瞬间


let x
delete x

console.log(x)