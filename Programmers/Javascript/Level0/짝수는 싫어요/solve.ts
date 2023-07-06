const solution = (n: number) => {
  return new Array(Math.ceil(n / 2)).fill(1).map((_, i) => 1 + i * 2)
};

export default solution;