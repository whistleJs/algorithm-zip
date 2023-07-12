const solution = (num_list: number[], n: number) => {
  return num_list.filter((_, i) => i % n === 0);
};

export default solution;