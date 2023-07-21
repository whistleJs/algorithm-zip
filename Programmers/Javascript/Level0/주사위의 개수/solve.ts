const solution = (box: [number, number, number], n: number) => {
  return box.reduce((acc, i) => acc * Math.floor(i / n), 1);
};

export default solution;