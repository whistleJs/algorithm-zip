const solution = (sides: [number, number]) => {
  return Math.min(...sides) * 2 - 1;
};

export default solution;