const solution = (arr: number[], k: number) => {
  return arr.map(i => k % 2 === 0 ? i + k : i * k);
};

export default solution;