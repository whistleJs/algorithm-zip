const solution = (numbers: numbers) => {
  return numbers.reduce((total, n) => total + n, 0) / numbers.length;
};

export default solution;