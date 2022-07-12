const solution = (n) => {
  let result = 0;
  
  loop: for (let i = 2; i <= n; i++) {
      for (let j = 2; j * j <= i; j++) {
          if (i % j === 0) continue loop;
      }
      
      result++;
  }
  
  return result;
};

export default solution;