const solution = (array: number[]) => {
  return array.sort((a, b) => a - b)[~~(array.length / 2)];
};

export default solution;