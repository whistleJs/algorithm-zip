const solution = (my_string: string) => {
  return [...my_string].map(Number).filter(s => Number.isInteger(s)).sort((a, b) => a - b);
};

export default solution;