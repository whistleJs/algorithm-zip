const solution = (n: number) => {
  const arr = [n];
  
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    
    arr.push(n);
  }
  
  return arr;
};

export default solution;