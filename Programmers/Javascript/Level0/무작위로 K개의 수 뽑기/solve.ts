const solution = (arr: number[], k: number) => {
  const newArr = [...new Set(arr)].slice(0, k);
  
  for (let i = newArr.length; i < k; i++) newArr.push(-1);
  
  return newArr;
};

export default solution;