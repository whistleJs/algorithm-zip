const solution = (numbers: number[]) => {
  return 45 - numbers.reduce((r, i) => r + i, 0);
}

export default solution;