const solution = (my_string: string) => {
  return my_string.split(' ').filter(s => s !== '');
};

export default solution;