const solution = (file: string = "/dev/stdin") => {
  const input = require("fs")
    .readFileSync(file)
    .toString()
    .split("\n")
    .map((l) => l.split(" ").map(Number));
  const [[N, M], [...numbers]] = input;

  let result = 0;

  for (let i = 0; i < N; i++) {
    let acc = 0;

    for (let j = i; j < N; j++) {
      acc += numbers[j];

      if (acc > M) break;
      if (acc === M) {
        result++;
        break;
      }
    }
  }

  return result;
};

export default solution;
