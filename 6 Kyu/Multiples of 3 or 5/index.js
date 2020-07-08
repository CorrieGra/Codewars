function solution(n){
   if ( typeof n === 'undefined' || n <= 1) return 0;
  let arr = [...Array(n - 1).keys()].map((v) => (v + 1));
  return arr.length !== 0 ? arr.filter(v => v % 5 === 0 || v % 3 === 0).reduce((acc, curr) => acc + curr, 0) : 0;
}