const solution = (start: number, end: number) => {
  return new Array(start - end + 1).fill(0).map((_, i) => start - i);
};

export default solution;