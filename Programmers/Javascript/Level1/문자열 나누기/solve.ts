const solution = (s: string) => {
  let result = 0;
  
  let str = null;
  let same = 0;
  let diff = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (str === null) str = s[i];
    
    if (str === s[i]) same++;
    else diff++;
    
    if (same === diff || (same !== diff && i === s.length - 1)) {
      result++;
      str = null;
    }
  }
  
  return result;
};

export default solution;