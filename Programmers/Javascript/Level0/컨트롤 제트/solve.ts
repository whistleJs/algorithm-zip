const solution = (s: string) => {
  const arr = s.split(' ');
  return arr.reduce((acc, item, i) => acc + (item === 'Z' ? -Number(arr[i - 1]) : Number(item)), 0);
};

export default solution;