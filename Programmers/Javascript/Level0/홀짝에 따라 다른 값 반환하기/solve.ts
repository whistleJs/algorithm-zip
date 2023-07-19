const solution = (n: number) => {
  return new Array(Math.floor(n / 2) + 1).fill(n % 2).map((num, i) => num + i * 2).reduce((acc, i) => acc + (n % 2 === 0 ? i * i : i), 0)
};

export default solution;