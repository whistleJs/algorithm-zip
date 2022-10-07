const solution = (strings: string[], n: number) => {
  return strings.sort((a, b) => a[n] === b[n] ? Number((a > b)) - Number((a < b)) : Number((a[n] > b[n])) - Number((a[n] < b[n])));
};

export default solution;