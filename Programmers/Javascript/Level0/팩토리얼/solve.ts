const solution = (n: number) => {
  let i = 1;
  while(true) {
    n /= i++;
    if (n < i) return i - 1;
  }
};

export default solution;