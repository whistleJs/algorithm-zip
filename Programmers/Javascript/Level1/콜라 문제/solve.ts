const solution = (a: number, b: number, n: number) => {
  let result = 0;
  
  while(true) {
    const count = Math.floor(n / a) * b;
    
    if (count === 0) return result;
    
    n = (n % a) + count;
    result += count;
  } 
}

export default solution;