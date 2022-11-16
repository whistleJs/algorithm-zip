const solution = (food: number[]) => {
  let str = '';
  
  food.forEach((v, i) => str += i.toString().repeat(Math.floor(v / 2)));
  
  return `${str}0${str.split('').reverse().join('')}`;
};

export default solution;