const solution = (arr: number[]) => {
  return arr.indexOf(2) > -1 ? arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1) : [-1];
};

export default solution;