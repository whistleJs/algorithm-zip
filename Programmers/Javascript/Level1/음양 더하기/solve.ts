const solution = (absolutes: number[], signs: boolean[]) => {
  return absolutes.map((item, i) => signs[i] ? item : -item).reduce((total, item) => total + item, 0);
}

export default solution;