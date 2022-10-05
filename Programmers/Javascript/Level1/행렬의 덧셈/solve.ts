const solution = (arr1: number[][], arr2: number[][]) => {
  return arr1.map((item, i) => {
    return item.map((value, j) => {
      return value + arr2[i][j];
    });
  });
};

export default solution;