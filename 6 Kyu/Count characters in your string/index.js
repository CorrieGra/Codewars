// OVERCOMPLICATED IT !!!
function count(_string = '') {
    // The function code should be here;
    let result = {};
    let _set = new Set(_string);

    _string.split('').forEach(v => {
        if (_set.has(v) && !result[v]) return result[v] = 1;
        if (_set.has(v) && result[v]) return ++result[v];
    });

    return result;
}

// SIMPLET SOLUTION
function count2(_string){
    const result = {};
    _string.split('').forEach(v => result[v] ? result[v]++ : result[v] = 1);
    return result;
}

console.log(count2('aba'), 2);