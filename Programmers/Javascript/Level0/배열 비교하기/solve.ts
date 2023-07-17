const solution = (arr1: number[], arr2: number[]) => {
  const acc1 = arr1.reduce((total, num) => total + num, 0);
  const acc2 = arr2.reduce((total, num) => total + num, 0);
  
  if (arr1.length > arr2.length) return 1;
  else if (arr1.length < arr2.length) return -1;
  else if (acc1 > acc2) return 1;
  else if (acc1 < acc2) return -1;
  return 0;
};

export default solution;