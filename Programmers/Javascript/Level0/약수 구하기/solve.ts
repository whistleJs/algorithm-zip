const solution = (n: number) => {
  const result = [];
  
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i);
      result.push(n / i);
    }
  }
      
  return Array.from(new Set(result)).sort((a, b) => a - b);
};

export default solution;