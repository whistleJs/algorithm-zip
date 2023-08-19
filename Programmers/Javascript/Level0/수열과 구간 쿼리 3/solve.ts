const solution = (arr: number, queries: [number, number][]) => {
  return queries.reduce((result, [idx1, idx2]) => {
    [result[idx1], result[idx2]] = [result[idx2], result[idx1]];
    return result;
  }, arr);
};

export default solution;