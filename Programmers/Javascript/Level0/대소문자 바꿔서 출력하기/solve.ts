/**
 * 실제 제출 코드
 */
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// }).on('line', line => {
//   console.log([...line].map(s => /[a-z]/g.test(s) ? s.toUpperCase() : s.toLowerCase()).join(''));
// });

/**
 * 테스트를 위한 코드
 */
const solution = (str: string) => {
  return [...str].map(s => /[a-z]/g.test(s) ? s.toUpperCase() : s.toLowerCase()).join('');
};

export default solution;