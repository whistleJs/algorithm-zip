const solution = (arr: number[], flag: boolean[]) => {
  return flag.reduce((result, bool, i) => {
    if (bool) {
      return [...result, ...new Array(arr[i] * 2).fill(arr[i])];
    } else {
      return result.slice(0, -arr[i]);
    }
  }, []);
};

export default solution;