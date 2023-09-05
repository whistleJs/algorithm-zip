const solution = (arr: number[]) => {
  const stk = arr.reduce((stk, item) => {
    if (stk.length === 0) {
      stk.push(item);
    } else {
      if (stk[stk.length - 1] === item) {
        stk.pop();
      } else {
        stk.push(item);
      }
    }
    
    return stk;
  }, []);
  
  return stk.length > 0 ? stk : [-1];
};

export default solution;