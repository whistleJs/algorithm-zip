const solution = (a: number, b: number) => {
  return new Date(`2016-${a}-${b}`).toString().split(' ')[0].toUpperCase();
};

export default solution;