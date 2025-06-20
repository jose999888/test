/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const t = s.trim()
    const first = t.slice(0,1)

    if(first !== '-' && first !== '+' && !isNumber(first)) return 0
    let res = '';
    for(let i = 0; i < t.length ; i++){
        const cur = t[i]

        if(i === 0){
            if(cur === '-' || cur === '+') continue
        }
        if(cur.trim().length === 0) break
        if(isNumber(cur) && cur){
            res += cur
        }
        else break;
    }
    if(first === '-') return Number(res)*-1 < Math.pow(-2,31) ? Math.pow(-2,31) : Number(res)*-1
    else return Number(res) > (Math.pow(2,31) - 1) ? Math.pow(2,31) - 1 : Number(res)
};
function isNumber(v){
    return !isNaN(Number(v));
}
console.log(myAtoi('   +0 123'))