const solution = (a: number, b: number, c: number) => {
  return new Array(4 - new Set([a, b, c]).size).fill(0).reduce((acc, _, i) => acc * (Math.pow(a, i + 1) + Math.pow(b, i + 1) + Math.pow(c, i + 1)), 1);
};

export default solution;