function maskify(cc) {
    return cc.replace(/[0-9\w\W](?=[0-9\w\W]{4})/gim, '#');
}

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');