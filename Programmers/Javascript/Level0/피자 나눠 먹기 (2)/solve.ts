const solution = (n: number) => {
  let i = 1;
  while(!Number.isInteger(i * 6 / n)) {
    i++;
  }
  return i;
};

export default solution;