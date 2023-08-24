const solution = (arr: number[], queries: number[][]) => {
  return queries.reduce((result, [s, e, k]) => {
    return result.map((item, i) => {
      if (s <= i && i <= e && i % k === 0) {
        item++;
      }
      return item;
    });
  }, arr);
};

export default solution;