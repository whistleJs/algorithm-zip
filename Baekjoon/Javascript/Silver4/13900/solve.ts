const solution = (file: string = "/dev/stdin") => {
  const input = require("fs").readFileSync(file).toString().split("\n");
  const n = BigInt(input[0]);
  const numbers = input[1].split(" ").map(BigInt);

  let acc = 0n;
  let result = 0n;

  for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
  }

  for (let i = 0; i < n; i++) {
    acc -= numbers[i];
    result += numbers[i] * acc;
  }

  return result.toString();
};

export default solution;
