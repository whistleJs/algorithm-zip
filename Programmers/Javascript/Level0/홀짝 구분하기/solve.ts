/**
 * 실제 제출 코드
 */
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// }).on('line', (str) => {
//   console.log(`${str} is ${Number(str) % 2 ? 'odd' : 'even'}`);
// });

/**
 * 테스트를 위한 코드
 */
const solution = (str: string) => {
  return `${str} is ${Number(str) % 2 ? 'odd' : 'even'}`;
}

export default solution;