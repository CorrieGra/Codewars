function wave(str) {
    if (typeof str === 'undefined') return [];

    let result = [];
    for (let i = 0; i < str.length; i++) {
        let arr = str.split('');
        if (/\s/.test(arr[i])) continue;
        arr[i] = arr[i].toUpperCase();
        result.push(arr.join(''))
    }

    return result;
}
