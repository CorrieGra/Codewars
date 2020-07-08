// ORIGINAL SOLUTION
function completeSeries(arr) {
    // write your code here
    arr.sort((a, b) => a < b ? -1 : 1);

    const hasDuplicate = arr.filter((v, i) => arr.indexOf(v) !== i).length > 0 ? true : false;

    if (hasDuplicate) return [0];

    let result = [];
    let i = 0;
    const maxInt = Math.max(...arr);

    for (i; i <= maxInt; i++)
    {
        result.push(i);
    }

    return result;
}

// IMPROVED SOLUTION
function completeSeriesImproved(arr){
    return new Set(arr).size !== arr.length ? [0] : [...Array(Math.max(...arr) + 1).keys()];
}
