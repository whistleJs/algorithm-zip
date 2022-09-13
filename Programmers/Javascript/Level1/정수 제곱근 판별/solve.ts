const solution = (n: number) => {
  return Math.sqrt(n) == ~~Math.sqrt(n) ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1) : -1
};

export default solution;