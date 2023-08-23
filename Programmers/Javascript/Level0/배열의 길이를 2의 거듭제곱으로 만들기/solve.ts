const solution = (arr: number[]) => {
  return [...arr, ...new Array((2 ** Math.ceil(Math.log2(arr.length))) - arr.length).fill(0)];
};

export default solution;