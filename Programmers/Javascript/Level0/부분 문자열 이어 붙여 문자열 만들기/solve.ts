const solution = (my_strings: string[], parts: number[][]) => {
  return my_strings.map((strings, i) => strings.substring(parts[i][0], parts[i][1] + 1)).join('');
};

export default solution;