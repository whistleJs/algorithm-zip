const solution = (n: number) => {
  return [...String(n)].map(a => Number(a)).reverse();
};

export default solution;