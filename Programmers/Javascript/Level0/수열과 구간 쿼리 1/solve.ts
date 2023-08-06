const solution = (arr: number[], queries: number[][]) => {
  return queries.reduce((result, [start, end]) => {
    for (let i = start; i <= end; i++) result[i]++;
    return result;
  }, arr);
};

export default solution;