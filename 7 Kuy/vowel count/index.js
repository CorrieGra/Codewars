function getCount(str){
    return str.split('').filter(v => /[a|e|o|i|u]/gim.test(v)).length;
}

console.log(getCount('abracadabra'))

module.exports = {
    getCount
}