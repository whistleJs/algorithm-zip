const solution = (myString: string, pat: string) => {
  const arr = myString.split(pat);
  arr.pop();
  return arr.join(pat) + pat;
};

export default solution;