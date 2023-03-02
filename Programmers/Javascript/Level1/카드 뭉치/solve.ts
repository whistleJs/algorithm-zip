const solution = (cards1: string[], cards2: string[], goal: string[]) => {
  let index1 = -1, index2 = -1;
  
  for (let i = 0; i < goal.length; i++) {
    const word = goal[i];
    
    if (word === cards1[index1 + 1]) {
      index1++;
      continue;
    } else if (word === cards2[index2 + 1]) {
      index2++;
      continue;
    } else {
      return "No";
    }
  }
  
  return "Yes";
};

export default solution;