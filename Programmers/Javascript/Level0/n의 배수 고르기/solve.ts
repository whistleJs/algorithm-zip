const solution = (n: number, numlist: number[]) => {
  return numlist.filter(num => num % n === 0);
};

export default solution;