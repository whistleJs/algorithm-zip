const solution = (my_string: string) => {
  return [...my_string].map(str => /[a-z]/g.test(str) ? str.toUpperCase() : str.toLowerCase()).join('');
};

export default solution;