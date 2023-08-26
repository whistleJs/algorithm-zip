const solution = (strArr: string[]) => {
  const arr = new Array(30).fill(0);
  strArr.forEach(s => arr[s.length - 1]++);
  return Math.max(...arr);
};

export default solution;