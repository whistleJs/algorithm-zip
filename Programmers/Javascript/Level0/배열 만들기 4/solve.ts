const solution = (arr: number[]) => {
  const stk = [];
  let i = 0;
  
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i++]);
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i++]);
      } else {
        stk.pop();
      }
    }
  }
  
  return stk;
};

export default solution;