const solution = (before: string, after: string) => {
  return +([...before].sort().join('') === [...after].sort().join(''))
};

export default solution;