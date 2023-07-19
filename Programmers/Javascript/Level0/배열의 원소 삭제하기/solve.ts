const solution = (arr: number[], delete_list: number[]) => {
  return arr.filter(item => !delete_list.includes(item));
};

export default solution;