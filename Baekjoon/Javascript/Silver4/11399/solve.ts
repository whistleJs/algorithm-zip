const solution = (file: string = "/dev/stdin") => {
  const input = require("fs").readFileSync(file).toString().split("\n");
  const n = Number(input[0]);

  let acc = 0;

  return input[1]
    .split(" ")
    .slice(0, n)
    .map(Number)
    .sort((a, b) => a - b)
    .reduce((result, i) => {
      acc += i;
      return result + acc;
    }, 0);
};

export default solution;
