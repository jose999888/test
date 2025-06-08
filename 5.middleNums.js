/**
 * 寻找两个有序数组的中位数
 * */

const nums1 = [1,3]
const nums2 = [2,3,4,5,6,7,8,9,10]

const findMiddleNums = (nums1,nums2) => {
    if(nums1.length > nums2.length){
        [nums1,nums2] = [nums2,nums1]
    }
    const len1 = nums1.length
    const len2 = nums2.length
    const middle = Math.floor((len1+len2+1)/2)  //2

    const listA = [-Infinity,...nums1,Infinity]
    const listB = [-Infinity,...nums2,Infinity]
    console.log(listA)
    let i = 0,j = middle
    while(true){
        if(listA[i] <= listB[j+1] && listA[i+1] >= listB[j]){
            const max = Math.max(listA[i],listB[j])
            const min = Math.min(listA[i+1],listB[j+1])
            return middle % 2 === 0 ? max : Math.floor((max + min) / 2)
        }
        i++
        j--
    }

}

console.log(findMiddleNums(nums1,nums2))