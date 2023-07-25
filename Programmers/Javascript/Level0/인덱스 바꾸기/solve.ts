const solution = (my_string: string, num1: number, num2: number) => {
  const str = [...my_string];
  [str[num1], str[num2]] = [str[num2], str[num1]];
  return str.join('');
};

export default solution;