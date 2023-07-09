const solution = (start: number, end: number) => {
  return new Array(end - start + 1).fill(0).map((_, i) => start + i);
};

export default solution;