const solution = (myString: string, pat: number) => {
  let count = 0;
  
  for (let i = 0; i <= myString.length - pat.length; i++) {
    myString.substr(i, pat.length) === pat && count++;
  }
  
  return count;
};

export default solution;