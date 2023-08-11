const solution = (intStrs: string[], k: number, s: number, l: number) => {
  return intStrs.map(str => +str.substr(s, l)).filter(n => n > k);
};

export default solution;