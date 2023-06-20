const solution = (number: number, n: number, m: number) => {
  return (!(number % n) && !(number % m)) * 1;
};

export default solution;