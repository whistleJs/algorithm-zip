const solution = (my_string: string, n: number) => {
  return my_string.split('').map(s => s.repeat(n)).join('');
};

export default solution;