const solution = (arr: number[], intervals: [[number, number], [number, number]]) => {
  return intervals.reduce((result, [start, end]) => [...result, ...arr.slice(start, end + 1)], []);
};

export default solution;