const solution = (d: number[], budget: number) => {
  let tmp = 0;
  
  d.sort((a, b) => a - b);
  
  for (let i = 0 ; i < d.length; i++) {
    tmp += d[i];
    
    if (tmp > budget) return i;
  }
  
  return d.length;
}

export default solution;