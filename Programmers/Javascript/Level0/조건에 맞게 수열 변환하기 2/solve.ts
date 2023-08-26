const solution = (arr: number[]) => {
  let count = 0;
  let beforeArr = [];
  
  while (!arr.every((item, i) => item === beforeArr[i])) {
    beforeArr = arr;
    arr = arr.map(i => {
      if (i > 50 && i % 2 === 0) i /= 2;
      if (i < 50 && i % 2 === 1) i = i * 2 + 1;
      return i;
    });
    count++;
  } 
  
  return --count;
};

export default solution;