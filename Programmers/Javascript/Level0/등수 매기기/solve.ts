const solution = (score: [number, number][]) => {
  const avg = score.map(([a, b]) => (a + b) / 2).sort((a, b) => b - a);
  return score.map(([a, b]) => avg.indexOf((a + b) / 2) + 1);
};

export default solution;