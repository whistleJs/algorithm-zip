const solution = (x: number, n: number) => {
  return new Array(n).fill(0).map((_, index) => x * (index + 1));
};

export default solution;