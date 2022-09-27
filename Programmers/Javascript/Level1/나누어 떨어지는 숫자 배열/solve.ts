const solution = (arr: number[], divisor: number) => {
  return arr.filter(value => value % divisor == 0).length ? arr.filter(value => value % divisor == 0).sort((a, b) => a - b) : [-1];
};

export default solution;