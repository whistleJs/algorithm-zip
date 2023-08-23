/**
 * 실제 제출 코드
 */
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// }).on('line', input => {
//   [str, number] = input.split(' ');
  
//   console.log(str.repeat(+number));
// });

const solution = (str: string, num: number) => {
  return str.repeat(+num);
};

export default solution;