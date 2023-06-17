const solution = (n: number) => {
  return new Array(n).fill(0).filter((_, i) => n % (i + 1) === 0).length;
};

export default solution;