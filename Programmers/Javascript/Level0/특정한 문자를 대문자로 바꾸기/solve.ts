const solution = (my_string: string, alp: string) => {
  return my_string.replaceAll(alp, alp.toUpperCase());
};

export default solution;