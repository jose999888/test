




function longestPalindrome(s) {
    const map = new Map()
    const len = s.length
    const mid = Math.floor(len/2)
    let max = 0
    if(len % 2 ===0 ){
        max = len - 1
    }else {
        max = len
    }

    for(let i = 0;;i++){
        const cur = s[i]
        if(map.has(cur)) {
            return s.slice(map.get(cur),i+1)
        }
        map.set(cur,i)

    }
};
// 0123 4  5 6789

// console.log(longestPalindrome('babab'))
console.log(Math.floor(5/2))