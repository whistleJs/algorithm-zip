const solution = (my_string: string) => {
  return [...new Set(my_string)].join('');
};

export default solution;