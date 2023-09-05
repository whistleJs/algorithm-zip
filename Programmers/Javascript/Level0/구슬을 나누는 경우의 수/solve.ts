const solution = (balls: number, share: number) => {
  const f = (n) => n > 1 ? f(n - 1) * n : 1;
  
  return Math.round(f(balls) / (f(balls - share) * f(share)));
};

export default solution;