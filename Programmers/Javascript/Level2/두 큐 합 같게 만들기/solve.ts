const solution = (queue1: number[], queue2: number[]) => {
  const arr = [...queue1, ...queue2, ...queue1, ...queue2];
  const avg = arr.reduce((s, i) => s + i, 0) / 4;
  let sum = queue1.reduce((s, i) => s + i, 0);
  
  if (avg % 1 !== 0) return -1;
  
  let count = 0, start = 0;
  let end = queue1.length;
  
  while (count <= arr.length) {
    if (sum < avg) {
      sum += arr[end++];
    } else if (sum > avg) {
      sum -= arr[start++];
    } else {
      return count;
    }
    
    count++;
  }
  
  return -1;
};

export default solution;