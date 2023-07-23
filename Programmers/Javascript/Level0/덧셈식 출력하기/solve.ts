/**
 * 실제 제출 코드
 */
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// }).on('line', line => {
//   const [num1, num2] = line.split(' ');
  
//   console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
// });

/**
 * 테스트를 위한 코드
 */
const solution = (number1: number, number2: number) => {
  return `${number1} + ${number2} = ${number1 + number2}`;
};

export default solution;