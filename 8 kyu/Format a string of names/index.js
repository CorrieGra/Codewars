function list(names){
    return names.map(x => x.name).join(', ').replace(/,(?!.*,)/gmi, ' &')
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge', "Must work with many names")
