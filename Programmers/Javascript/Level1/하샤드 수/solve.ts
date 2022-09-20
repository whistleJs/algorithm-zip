const solution = (num: number) => {
  return num % Number([...String(num)].reduce((s, v) => +s + +v, 0)) === 0;
};

export default solution;