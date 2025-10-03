const solution = (file: string = "/dev/stdin") => {
  const input = require("fs")
    .readFileSync(file)
    .toString()
    .split("\n")
    .map(Number);
  const [, ...ropes] = input;

  const weights = ropes.sort((a, b) => b - a).map((r, i) => r * (i + 1));

  return Math.max(...weights);
};

export default solution;
