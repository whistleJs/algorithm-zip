const solution = (hp: number) => {
  let result = 0;
  
  result += Math.floor(hp / 5);
  hp %= 5;
  result += Math.floor(hp / 3);
  hp %= 3;
  result += hp;
  
  return result;
};

export default solution;