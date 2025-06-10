




function longestPalindrome(s) {
    let res = ''
    const map = new Map()
    const len = s.length
    if(s.length === 1) return s
    for(let i = 0;i < len;i++){
        const cur = s[i]
        if(i > 0 && map.has(cur)) {
            if(s[i + 1] === s[i - 1] && s[i] === s[i+2]){
                continue
            }else {
                res = s.slice(map.get(cur),i+1)
            }
        }
        map.set(cur,i)
        if(!res){
            res = s[i]
        }
    }
    return  res
};
// 0123 4  5 6789

console.log(longestPalindrome('babab'))