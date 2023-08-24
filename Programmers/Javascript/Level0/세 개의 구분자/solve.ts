const solution = (myStr: string) => {
  const arr = myStr.split(/[abc]/g).filter(s => s);
  return arr.length === 0 ? ['EMPTY'] : arr;
};

export default solution;