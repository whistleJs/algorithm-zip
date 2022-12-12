const solution = (row: number, column: number, queries: number[][]) => {
  const result = [];
  const arr = new Array(row).fill(0).map((_, r) => new Array(column).fill(0).map((_, c) => c + 1 + (r * column)));
  
  for (let i = 0; i < queries.length; i++) {
    const [y1, x1, y2, x2] = queries[i];
    
    let min = arr[y1 - 1][x1 - 1];
    let temp = min;
    
    for (let j = x1; j < x2; j++) {
      const t = arr[y1 - 1][j];
      
      arr[y1 - 1][j] = temp;
      temp = t;
      min = Math.min(min, t);
    }
    
    for (let j = y1; j < y2; j++) {
      const t = arr[j][x2 - 1];
      
      arr[j][x2 - 1] = temp;
      temp = t;
      min = Math.min(min, t);
    }
    
    for (let j = x2 - 1; j >= x1; j--) {
      const t = arr[y2 - 1][j - 1];
      
      arr[y2 - 1][j - 1] = temp;
      temp = t;
      min = Math.min(min, t);
    }
    
    for (let j = y2 - 1; j >= y1; j--) {
      const t = arr[j - 1][x1 - 1];
      
      arr[j - 1][x1 - 1] = temp;
      temp = t;
      min = Math.min(min, t);
    }
    
    result.push(min);
  }
  
  return result;
};

export default solution;