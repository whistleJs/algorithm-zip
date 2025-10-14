const solution = (file: string = "/dev/stdin") => {
  const input = require("fs")
    .readFileSync(file)
    .toString()
    .split(" ")
    .map(Number);
  const [N, K] = input;
  const numbers = new Array(N).fill(0).map((_, i) => i + 1);
  const result = [];

  let index = 0;

  for (let i = 0; i < N; i++) {
    index += K - 1;

    if (index > numbers.length - 1) {
      index %= numbers.length;
    }

    result.push(numbers.splice(index, 1)[0]);
  }

  return result;
};

export default solution;
