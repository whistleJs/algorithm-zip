const solution = (myString: string, pat: string) => {
  return +[...myString].map(s => s === 'A' ? 'B' : 'A').join('').includes(pat);
};

export default solution;