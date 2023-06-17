const solution = (numbers: number[]) => {
  const [max1, max2] = numbers.sort((a, b) => b - a);
  return max1 * max2;
};

export default solution;