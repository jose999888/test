var reverse = function(x) {
    if(x === 0) return 0
    const s = x.toString()
    let res = ''
    if(x < 0){
       const c = s.substring(1)
        return c.split('').reverse().join('') * -1
    }else {
        return s.split('').reverse().join('')
    }
};

reverse(-111)