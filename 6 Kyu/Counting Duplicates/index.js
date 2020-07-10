function duplicateCount(text){
    if (typeof text === 'undefined' || /\s/.test(text) || text === '') return 0;
    return [...new Set(text.toLowerCase().split('').filter((v, i, a) => i !== a.indexOf(v)))].length;
  }