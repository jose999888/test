/**
* 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
*[leftIdx,rightIdx]
 * 然后，遍历后先挪左指针，同步进行大小比较，边界有相等的时候，其次必须在窗口内
* */
const s = 'abcabcbb'
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let left = 0, max = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // 如果字符已存在并且在当前窗口内，移动左指针
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }

        map.set(char, right); // 更新字符最后出现位置
        max = Math.max(max, right - left + 1);
    }

    return max;
};

// 111111
console.log(lengthOfLongestSubstring('abc'))