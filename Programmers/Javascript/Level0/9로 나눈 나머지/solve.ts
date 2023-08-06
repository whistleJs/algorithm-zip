// Jest - BigInt Error
// const solution = (number: number) => {
//   return BigInt(number) % 9n;
// };

// Other Solution
const solution = (number) => {
  return [...number.toString()].reduce((acc, n) => acc + Number(n), 0) % 9;
}

export default solution;