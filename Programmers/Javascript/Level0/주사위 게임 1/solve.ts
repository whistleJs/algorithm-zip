const solution = (a: number, b: number) => {
  if (a % 2 !== 0 && b % 2 !== 0) {
    return a ** 2 + b ** 2;
  } else if (a % 2 === 0 && b % 2 === 0) {
    return Math.abs(a - b);
  }
  
  return 2 * (a + b);
};

export default solution;