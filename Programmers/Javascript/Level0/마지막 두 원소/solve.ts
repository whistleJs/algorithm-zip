const solution = (num_list: number[]) => {
  return num_list[num_list.length - 1] > num_list[num_list.length - 2]
    ? [...num_list, num_list[num_list.length - 1] - num_list[num_list.length - 2]]
    : [...num_list, num_list[num_list.length - 1] * 2];
};

export default solution;