const solution = (lottos: number[], win_nums: number[]) => {
  let max = 7;
  let min = 7;
  
  lottos.forEach(number => {
    if (number === 0) {
      max--;
    } else if (win_nums.includes(number)) {
      max--;
      min--;
    }
  });
  
  return [Math.min(6, max), Math.min(6, min)];
};

export default solution;