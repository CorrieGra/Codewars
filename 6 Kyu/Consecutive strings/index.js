function longestConsec(strarr, k) {
    if (k > strarr.length || strarr.length === 0 || k <= 0) return ""
    let longest = '';
    let i = 0;

    
    // strarr.forEach((v, i, a) => `${v}${a[i++]}`.length > longest.length ? longest = `${v}${a[i++]}` : null);

    return longest;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), 'abigailtheta');
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "\"\"");