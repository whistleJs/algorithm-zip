const solution = (n: number, lost: number[], reserve: number[]) => {
  let result = n;

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        result++;
        reserve[j] = lost[i] = -1;
        break;
      }
    }
  }

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j] - 1 || lost[i] === reserve[j] + 1) {
        result++;
        reserve[j] = -1;
        break;
      }
    }
  }
  
  return result - lost.length;
};

export default solution;