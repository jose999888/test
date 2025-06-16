/**
 * z字形变化
 * 1. 画图找规律，然后一行一行 一个一个取值+=
 * 2. 也可以用打标记方法，但是效率不高
 *
 *
 * */

var convert = function (s, numRows) {
    let length = s.length;
    if (numRows === 1 || numRows > length) {
        return s;
    }
    let res = "";
    let left = numRows * 2 - 2;
    let right = 0;
    for (let i = 0; i < numRows; i++, left -= 2, right += 2) {
        res += s[i];
        for (let j = i; j < length;) {
            j += left;
            if (left !== 0 && j < length) {
                res += s[j];
            }
            j += right;
            if (right !== 0 && j < length) {
                res += s[j];
            }
        }
    }
    return res;
};
