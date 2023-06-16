const solution = (s1: string[], s2: string) => {
  return s1.filter(str => s2.includes(str)).length;
};

export default solution;