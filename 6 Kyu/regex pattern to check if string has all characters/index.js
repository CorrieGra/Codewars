function regexContainsAll(str) {
    
  }

  console.log(regexContainsAll('abc').test('abc'), 'EXPECTED : true' , regexContainsAll('abc'));
  console.log(regexContainsAll('abc').test('bca'), 'EXPECTED : true' , regexContainsAll('abc'));
  console.log(regexContainsAll('abc').test('ba'), 'EXPECTED : false' , regexContainsAll('abc'));
  console.log(regexContainsAll('abc').test('baczzz'), 'EXPECTED : true' , regexContainsAll('abc'));
  console.log(regexContainsAll('dL').test('ZQRdLE'),  'EXPECTED : true' ,regexContainsAll('dL'));