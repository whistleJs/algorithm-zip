/**
 * 실제 제출 코드
 */
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// }).on('line', line => {
//   for (let i = 1; i <= line; i++) {
//     console.log('*'.repeat(i));
//   }
// });

/**
 * 테스트를 위한 코드
 */
const solution = (line: number) => {
  let result = '';

  for (let i = 1; i <= line; i++) {
    result += ('*'.repeat(i) + '\n');
  }

  return result;
}

export default solution;