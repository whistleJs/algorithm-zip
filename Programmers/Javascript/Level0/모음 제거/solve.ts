const solution = (my_string: string) => {
  return [...my_string].filter(s => !['a', 'e', 'i', 'o', 'u'].includes(s)).join('');
};

export default solution;