const solution = (n: number, k: number) => {
  return new Array(Math.floor(n / k)).fill(0).map((_, i) => (i + 1) * k);
};

export default solution;