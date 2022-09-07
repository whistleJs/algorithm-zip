const solution = (left: number, right: number) => {
  let result = 0;
  
  for (let num = left; num <= right; num++) {
    result += Math.sqrt(num) % 1 === 0 ? -num : num;
  }
  
  return result;
};

export default solution;