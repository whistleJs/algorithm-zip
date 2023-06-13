const solution = (n: number) => {
  return Array(~~(n / 2)).fill(0).reduce((total, _, i) => total + (i + 1) * 2, 0);
};

export default solution;