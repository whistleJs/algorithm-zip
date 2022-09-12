const solution = (n: number) => {
  return [...String(n)].reduce((a, b) => Number(a) + Number(b), 0);
};

export default solution;