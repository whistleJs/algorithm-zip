const solution = (num_list: number[]) => {
  return num_list.reduce((acc, num) => {
    let count = 0;
    
    while (num > 1) {
      num = (num % 2 === 0) ? num / 2 : (num - 1) / 2;
      count++;
    }
    
    return acc + count;
  }, 0);
};

export default solution;