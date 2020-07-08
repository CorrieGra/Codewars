function descendingOrder(n){
        if (n < 10) return n;
        return +n.toString().split('').sort((a, b) => a < b ? 1 : -1).join('');
  }