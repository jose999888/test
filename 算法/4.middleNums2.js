/**
 *
 * 魔鬼题目，多看几遍，扣了两天，不要白费这些时间
 *
 * 二分查找
 *
 * 整理思路
 * 1. 首先要知道中位数的概念
 * 2. 然后利用它划分数组
 * 3. 首先 传入 a ，b 两个有序数组，那么利用中位数的概念，我们要从a，b各取一个分界线
 * 4. 分界线在哪呢，这个时候就要计算了，以最短数组为查找源
 * 5. 比如我们定 i = 1的时候，就意味着从a取了1个，也就是第a[i - 1]，所以i就是a的第二组开头，也就是分界线右边
 * 6. 分界线要满足，左边的最大值要小于，右边的最小值，再直白点就是，a[i - 1] < b[j] && b[j-1] < a[j]
 * 7. 然后定一一个start和end 用来判定循环停止条件且记录[start,end]的位置
 * 8. 比如说，当前a左大于b右了 也就是交叉不满足 了，那他是大于的b右，所以这个时候要移动end指针向左缩小，也就是使下一次取值变小
 * 9. 直到满足条件，跳出循环
 * 10. 然后就是对边界的处理infinity是无穷的意思
 *
 *
 * */

const findMedianSortedArrays = function(a, b) {
    if(a.length > b.length) {
        [a,b] = [b,a]
    }
    const m = a.length
    const n = b.length
    const middle = Math.floor((m + n + 1)/2)

    let left = 0,right = m
    while(left < right){
        const i = Math.floor((left + right + 1) / 2)
        const j = middle - i

        if(a[i-1] > b[j]){
            right = i - 1
        }else {
            left = i
        }
    }
    const x = left
    const y = middle - left
    const al = x === 0 ? -Infinity : a[x - 1]
    const ar = x === m ? Infinity : a[x]
    const bl = y === 0 ? -Infinity : b[y - 1]
    const br = y === n ? Infinity : b[y]
    return (m+n) % 2 === 0 ? (Math.max(al,bl) + Math.min(ar,br))/2 : Math.max(al,bl)
};

console.log(findMedianSortedArrays([2,2,4,4], [2,2,2,2,4,4]))
// findMedianSortedArrays([9], [2,3,4,5,6,7,8,9,10])