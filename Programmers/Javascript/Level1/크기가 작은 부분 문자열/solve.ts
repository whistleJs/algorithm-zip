const solution = (t: string, p: string) => {
  let result = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    if (Number(t.slice(i, i + p.length)) <= Number(p)) result++;
  }

  return result;
};

export default solution;
