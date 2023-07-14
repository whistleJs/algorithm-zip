const solution = (arr: number[]) => {
  return arr.reduce((total, number) => [...total, ...new Array(number).fill(number)], []);
};

export default solution;