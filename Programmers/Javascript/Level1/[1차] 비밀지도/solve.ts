const solution = (n: number, arr1: number[], arr2: number[]) => {
  return arr1.map((v, i) => (v | arr2[i]).toString(2).padStart(n, '0').replace(/0|1/g, v => +v ? '#' : ' '));
};

export default solution;