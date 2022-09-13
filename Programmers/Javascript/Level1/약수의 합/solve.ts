const solution = (n: number) => {
  let filter = 0;
  
  for (let i = 1 ; i <= Math.sqrt(n) ; i++) {
    if (n / i == ~~(n / i)) {
      if (n / i == i) {
        filter += i;
      } else {
        filter += (n / i) + i;
      }
    }
  }
  
  return filter;
};

export default solution;