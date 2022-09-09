const solution = (price: number, money: number, count: number) => {
  return Math.max(((price + (price * count)) * (count / 2)) - money, 0);
};

export default solution;