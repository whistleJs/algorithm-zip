const solution = (file: string = "/dev/stdin") => {
  const input = require("fs")
    .readFileSync(file)
    .toString()
    .split("\n")
    .map(Number);
  const [, ...numbers] = input;

  const arr = [0, 1, 2, 4, ...Array(8).fill(0)];

  for (let i = 4; i < 12; i++) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }

  return numbers.map((i) => arr[i]);
};

export default solution;
