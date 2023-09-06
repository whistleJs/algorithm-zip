const solution = (arr: number[], queries: [number, number, number][]) => {
  return queries.map(([s, e, k], i) => arr.slice(s, e + 1).sort((a, b) => a - b).find(n => n > k) || -1);
};

export default solution;