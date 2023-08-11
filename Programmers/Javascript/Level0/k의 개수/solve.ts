const solution = (i: number, j: number, k: number) => {
  let str = '';
  
  for (; i <= j; i++) {
    str += i;
  }
  
  return str.split(k).length - 1;
};

export default solution;