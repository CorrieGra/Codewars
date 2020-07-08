function solution(n){
    let i = 1;
      let multiples = [];
      for (i; i < n; i++) {
          i % 3 === 0 || i % 5 === 0 ? multiples.push(i) : null;
      }
  
      return multiples.length === 0 ? 0 : multiples.reduce((acc, curr) => acc + curr);
  }