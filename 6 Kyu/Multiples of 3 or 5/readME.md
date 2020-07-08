> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Task
> Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

* Note: If the number is a multiple of both 3 and 5, only count it once.

# Previous Solution
```
function solution(n){
  let i = 1;
    let multiples = [];
    for (i; i < n; i++) {
        i % 3 === 0 || i % 5 === 0 ? multiples.push(i) : null;
    }

    return multiples.length === 0 ? 0 : multiples.reduce((acc, curr) => acc + curr);
}
```