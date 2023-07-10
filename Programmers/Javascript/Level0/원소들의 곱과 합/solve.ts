const solution = (num_list: number[]) => {
  return (num_list.reduce((total, n) => total * n, 1) < num_list.reduce((total, n) => total + n, 0) ** 2) * 1;
};

export default solution;