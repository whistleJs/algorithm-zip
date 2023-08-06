const solution = (num_list: number[], n: number) => {
  return new Array(num_list.length / n).fill([]).map((_, i) => num_list.slice(i * n, (i + 1) * n));
};

export default solution;