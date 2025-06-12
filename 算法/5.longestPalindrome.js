/**
 * @param {string} s
 * @return {string}
 *
 * 用到了中心扩散法。
 * 1. 遍历每一个项，以自己为中心，两边扩散对比，数组下标0开始，数组长度减1为终点
 * 2. 数组值的数量计算方式为[m,n] => n-m + 1 ，例如：[0,2]含有0，1，2,=>2-0 +1 = 3
 * 3. 所以当他不满足循环条件的时候，就计算出他的长度与之前的长度res比较，如果比他长，就替换他
 * 4. 重点在于，遍历每一个值，且考虑奇数或偶数，所以每次传值都不一样
 */
var longestPalindrome = function(s) {
    if (s.length<2){
        return s
    }
    let res = ''
    for (let i = 0; i < s.length; i++) {
        // 以一个字符为中心
        helper(i, i)
        // 以两个字符为中心
        helper(i, i + 1)
    }

    function helper(m, n) {
        while (m >= 0 && n < s.length && s[m] === s[n]) {
            m--
            n++
        }
        // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
        // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
        if (n - m - 1 > res.length) {
            // slice也要取[m+1,n-1]这个区间
            res = s.slice(m + 1, n)
        }
    }
    return res
};

console.log(longestPalindrome('abba'))