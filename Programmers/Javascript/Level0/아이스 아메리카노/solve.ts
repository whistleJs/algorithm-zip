const solution = (money: number) => {
  return [
      ~~(money / 5500),
      money % 5500
  ];
};

export default solution;
