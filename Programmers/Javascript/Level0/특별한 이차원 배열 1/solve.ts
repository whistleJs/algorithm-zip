const solution = (n: number) => {
  return new Array(n).fill([]).map((_, i) => new Array(n).fill(0).map((_, j) => i === j ? 1 : 0));
};

export default solution;