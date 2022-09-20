const solution = (arr: number[]) => {
  return arr.reduce((s, v) => s + v) / arr.length;
};

export default solution;
