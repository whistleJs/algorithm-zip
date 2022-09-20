const solution = (n: number) => {
  return Number([...String(n)].sort().reverse().join(''))
};

export default solution;