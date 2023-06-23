const solution = (n: number) => {
  return [...n.toString()].reduce((total, num) => total + Number(num), 0);
};

export default solution;