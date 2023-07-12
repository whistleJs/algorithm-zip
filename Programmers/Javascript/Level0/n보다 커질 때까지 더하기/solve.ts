const solution = (numbers: number[], n: number) => {
  return numbers.reduce((total, num) => total > n ? total : total + num, 0);
};

export default solution;