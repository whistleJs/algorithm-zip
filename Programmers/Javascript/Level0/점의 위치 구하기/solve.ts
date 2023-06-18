const solution = ([x, y]: [number, number]) => {
  return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
};

export default solution;