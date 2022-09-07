const solution = (N: number, stages: number[]) => {
  let result = [];
  
  for (let i = 1 ; i <= N ; i++) {
    const arr = [];
    let cnt = 0;
    
    for (let j = 0 ; j < stages.length ; j++) {
      if (stages[j] == i) {
          cnt++;
      } else {
          arr.push(stages[j]);
      }
    }
    
    let percent = isNaN(cnt / stages.length) ? 0 : cnt / stages.length;
    
    result.push({stage: i, percent: percent});
    stages = arr;
  }
  
  result.sort((a, b) => {
      if (a.percent > b.percent) return -1;
      else if (a.percent < b.percent) return 1;
      else if (a.stage < b.stage) return -1;
      else return 1;
  });
  
  return result.map(v => v.stage);
};

export default solution;