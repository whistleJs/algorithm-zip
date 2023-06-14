const solution = (numbers: number[], num1: number, num2: number) => {
  return numbers.splice(num1, num2 - num1 + 1);
};

export default solution;