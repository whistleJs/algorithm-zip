const solution = (a: number, b: number) => {
  return Math.max(2 * a * b, +`${a}${b}`);
};

export default solution;