const solution = (num_list: number[]) => {
  return [
    num_list.filter(n => n % 2 === 0).length,
    num_list.filter(n => n % 2 !== 0).length
  ]
};

export default solution;