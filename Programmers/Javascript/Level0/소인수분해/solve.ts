const solution = (n: number) => {
  const result = new Set();
  
  while (n > 1) {
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        result.add(i);
        n /= i;
        break;
      }
    }
  }
  
  return [...result];
};

export default solution;