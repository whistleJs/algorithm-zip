const solution = (num: number, k: number) => {
  return num.toString().indexOf(k) + 1 || -1;
};

export default solution;