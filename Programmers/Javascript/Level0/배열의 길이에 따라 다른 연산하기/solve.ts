const solution = (arr: number[], n: number) => {
  return arr.length % 2 === 0
    ? arr.map((num, i) => i % 2 === 0 ? num : num + n)
    : arr.map((num, i) => i % 2 === 0 ? num + n : num);
};

export default solution;