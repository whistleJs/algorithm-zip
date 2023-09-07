const solution = (my_string: string, overwrite_string: string, s: number) => {
  return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
};

export default solution;