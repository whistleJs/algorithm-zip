const solution = (a: number, b: number) => {
  return (a + b) * ((Math.max(a, b) - Math.min(a, b) + 1) / 2);
};

export default solution;