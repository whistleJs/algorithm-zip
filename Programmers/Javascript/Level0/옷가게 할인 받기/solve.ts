const solution = (price: number) => {
  return price >= 500_000
        ? (price * 0.8)
        : price >= 300_000
          ? ~~(price * 0.9)
          : price >= 100_000
            ? ~~(price * 0.95)
            : price;
};

export default solution;