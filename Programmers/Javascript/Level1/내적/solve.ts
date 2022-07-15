const solution = (a: number[], b: number[]) => {
  return a.reduce((r, i, idx) => r + (i * b[idx]), 0);
}

export default solution;