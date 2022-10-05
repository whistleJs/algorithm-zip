const solution = (n: number, m: number) => {
  const max = (a: number, b: number) => {
    if (b === 0) {
      return a;
    }
    
    return max(b, a % b);
  }
  
  const maxValue = max(Math.max(n, m), Math.min(n, m));
  const minValue = (n * m) / maxValue;
  
  return [maxValue, minValue];
};

export default solution;