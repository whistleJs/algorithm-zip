const solution = (numbers: number[], k: number) => {
  return numbers[2 * (k - 1) % numbers.length];
};

export default solution;