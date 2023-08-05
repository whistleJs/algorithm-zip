const solution = (my_string: string) => {
  return [...my_string.toLowerCase()].sort().join('');
};

export default solution;