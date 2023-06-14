const solution = (n: number, k: number) => {
  const mealPrice = n * 12000;
  const drinkPrice = k * 2000 - ~~(n / 10) * 2000;
  
  return mealPrice + drinkPrice;
};

export default solution;