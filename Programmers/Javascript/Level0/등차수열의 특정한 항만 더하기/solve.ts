const solution = (a: number, d: number, included: boolean[]) => {
  return included.reduce((acc, bool, index) => acc + (bool ? a + d * index : 0), 0);
};

export default solution;