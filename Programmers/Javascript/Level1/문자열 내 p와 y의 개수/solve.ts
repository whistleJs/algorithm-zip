const solution = (s: string) => {
  return [...s].filter(c => c.toLowerCase() == 'p').length == [...s].filter(c => c.toLowerCase() == 'y').length;
};

export default solution;