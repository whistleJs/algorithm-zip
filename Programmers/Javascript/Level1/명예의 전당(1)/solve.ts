const solution = (k: number, score: number[]) => {
  let temp = [];
  
  return score.map(num => {
    temp.push(num);
    temp = temp.sort((a, b) => b - a).slice(0, k);
    
    return temp[temp.length - 1];
  });
};

export default solution;