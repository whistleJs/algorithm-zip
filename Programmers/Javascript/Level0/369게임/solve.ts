const solution = (order: number) => {
  return [...order.toString()].filter(i => [3, 6, 9].includes(+i)).length;
};

export default solution;