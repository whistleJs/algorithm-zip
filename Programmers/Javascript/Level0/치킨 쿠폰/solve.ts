const solution = (chicken: number) => {
  let count = 0;
  
  while (chicken >= 10) {
    count += ~~(chicken / 10);
    chicken = ~~(chicken / 10) + (chicken % 10);
  }
  
  return count;
};

export default solution;