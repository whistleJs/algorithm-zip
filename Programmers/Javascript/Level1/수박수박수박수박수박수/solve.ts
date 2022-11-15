const solution = (n: number) => {
  return n % 2 == 0 ? '수박'.repeat(n / 2) : '수박'.repeat(n / 2) + '수';
};

export default solution;
