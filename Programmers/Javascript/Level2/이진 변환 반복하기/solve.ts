const solution = (s: string) => {
  let count = 0;
  let zeroCount = 0;
  
  while (s !== '1') {
    count++;
    
    zeroCount += s.toString().split('0').length - 1;
    s = s.toString().split('0').join('').length.toString(2);
  }
  
  return [count, zeroCount];
}

export default solution;