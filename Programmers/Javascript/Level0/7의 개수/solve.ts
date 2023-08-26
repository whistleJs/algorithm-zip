const solution = (array: number[]) => {
  return array.join('').split('7').length - 1;
};

export default solution;