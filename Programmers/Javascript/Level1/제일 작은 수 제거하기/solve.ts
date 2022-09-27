const solution = (arr: number[]) => {
  const filter = arr.filter(item => item != Math.min(...arr));
  return filter.length < 1 ? [-1] : filter;
}

export default solution;