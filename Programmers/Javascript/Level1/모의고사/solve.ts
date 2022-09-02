const solution = (arr: number[]) => {
  const datas = [
    { idx : 1, check: [1, 2, 3, 4, 5], count: 0 },
    { idx : 2, check: [2, 1, 2, 3, 2, 4, 2, 5], count: 0 },
    { idx : 3, check: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], count: 0 }
  ];
  
  for (let i = 0 ; i < arr.length ; i++) {
    for (let j = 0 ; j < datas.length ; j++) {
      if (datas[j].check[i % datas[j].check.length] === arr[i]) {
        datas[j].count++;
      }
    }
  }
  
  return datas.filter(x => x.count == Math.max(...datas.map(x => x.count))).map(x => x.idx);
};

export default solution;