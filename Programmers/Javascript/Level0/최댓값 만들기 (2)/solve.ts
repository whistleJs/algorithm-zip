const solution = (numbers: number[]) => {
  const [num1, num2] = numbers.sort((a, b) => a - b);
  const [num3, num4] = numbers.sort((a, b) => b - a);
  
  return Math.max(num1 * num2, num3 * num4);
};

export default solution;