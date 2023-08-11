const solution = (board: number[][], k: number) => {
  return board.reduce((acc, b, i) => {
    if (i > k) return acc;
    return acc + b.reduce((acc, item, j) => {
      if (i + j > k) return acc;
      return acc + item;
    }, 0);
  }, 0);
};

export default solution;