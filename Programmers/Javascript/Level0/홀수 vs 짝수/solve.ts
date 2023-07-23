const solution = (num_list: number[]) => {
  return Math.max(
    num_list.filter((_, i) => i % 2 === 0).reduce((acc, n) => acc + n, 0),
    num_list.filter((_, i) => i % 2 === 1).reduce((acc, n) => acc + n, 0)
  );
};

export default solution;