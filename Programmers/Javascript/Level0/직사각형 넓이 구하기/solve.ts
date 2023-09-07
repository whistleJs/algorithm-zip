const solution = (dots: [number, number][]) => {
  const [x1, x2] = new Set(dots.map(([x, y]) => x));
  const [y1, y2] = new Set(dots.map(([x, y]) => y));
  return Math.abs((x1 - x2) * (y1 - y2));
};

export default solution;