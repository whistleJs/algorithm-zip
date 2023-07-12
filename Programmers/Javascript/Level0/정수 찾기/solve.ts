const solution = (num_list: number[], n: number) => {
  return Boolean(num_list.find(num => num === n)) * 1;
};

export default solution;