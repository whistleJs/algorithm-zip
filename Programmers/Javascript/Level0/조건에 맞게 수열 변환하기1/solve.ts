const solution = (arr: number[]) => {
  return arr.map(i => (i >= 50 && i % 2 === 0) ? ~~(i / 2) : (i < 50 && i % 2 === 1) ? i * 2 : i);
};

export default solution;