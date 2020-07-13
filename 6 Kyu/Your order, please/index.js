function order(words){
    return words.split(' ').sort((a, b) => /[0-9]/.exec(a)[0] < /[0-9]/.exec(b)[0] ? -1 : 1).join(' ');
}
