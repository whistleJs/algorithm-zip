const solution = (my_string: string, index_list: number[]) => {
  return index_list.reduce((str, index) => str + my_string[index], '');
};

export default solution;