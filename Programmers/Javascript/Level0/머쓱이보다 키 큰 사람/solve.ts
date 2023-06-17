const solution = (array: number[], height: number) => {
  return array.filter(h => h > height).length;
};

export default solution;