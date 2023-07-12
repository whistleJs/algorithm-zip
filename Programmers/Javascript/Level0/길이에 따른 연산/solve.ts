const solution = (num_list: number[]) => {
  return num_list.length > 10 ? num_list.reduce((total, n) => total + n, 0) : num_list.reduce((total, n) => total * n, 1);
};

export default solution;