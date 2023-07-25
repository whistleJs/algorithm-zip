const solution = (my_string: string) => {
  return [...my_string].map((_, i) => my_string.substr(i)).sort();
};

export default solution;