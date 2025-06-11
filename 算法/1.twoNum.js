// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

// 你可以按任意顺序返回答案。

// 方法：枚举加哈希表

/**
 * 
 * @description 把x+y = target的问题转化为 x = target-y
*/

function twoNums(nums,target){
    const exist = {}

    for(let i = 0; i < nums.length;i++){
        const curNum = nums[i]
        const need = target - curNum
        const needIndex = exist[need]
        if(needIndex !== undefined){
            return [needIndex, i]
        }else{
            exist[curNum] = i
        }
    }
}
// console.log(twoNums([2,7,11,15],9))
// console.log(twoNums([3,2,4],6))
// console.log(twoNums([3,3],6))


//如果是3个数相加等于目标值呢
// [1,3,4,2] 6
const threeNums = (nums,target) =>{
    const n = nums.length
 for(let i = 0; i < n; i++ ){
    const exist = new Map()
    const curNum = nums[i]  
    const targetNum = target - curNum  

    for(let j = i + 1;j < n; j++){
        const res = targetNum - nums[j]  
        if(exist.get(res) !== undefined){
            return [i,j,exist.get(res)]
        }else{
            exist.set(nums[j],j)
    // console.log("🚀 ~ threeNums ~ exist:", exist)

        }
    }
 }
}
console.log(threeNums([1,3,2,4],9))