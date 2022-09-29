const solution = (str: string) => {
  const centerIdx = Math.ceil(str.length / 2) - 1;
  
  return str.length % 2 == 0 ? str.slice(centerIdx, centerIdx + 2) : str.slice(centerIdx, centerIdx + 1);
};

export default solution;