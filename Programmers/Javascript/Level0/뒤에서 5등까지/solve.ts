const solution = (num_list: number[]) => {
  return num_list.sort((a, b) => a - b).slice(0, 5);
};

export default solution;