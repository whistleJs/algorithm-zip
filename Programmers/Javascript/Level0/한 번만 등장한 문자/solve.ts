const solution = (s: string) => {
  return [...s].filter(str => s.indexOf(str) === s.lastIndexOf(str)).sort().join('');
};

export default solution;