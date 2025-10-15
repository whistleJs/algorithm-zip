const solution = (file: string = "/dev/stdin") => {
  const input = require("fs")
    .readFileSync(file)
    .toString()
    .split("\n")
    .map((l) => l.split(" ").map(Number));
  const [, [M], [...numbers]] = input;

  numbers.sort((a, b) => a - b);

  let result = 0;
  let start = 0,
    end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];

    if (sum === M) {
      numbers.splice(start, 1);
      numbers.splice(end, 1);

      result++;
      start = 0;
      end = numbers.length - 1;
    } else if (sum < M) {
      start++;
    } else if (sum > M) {
      end--;
    }
  }

  return result;
};

export default solution;
// [1 2 3 4 5 7]
// [1 3 4 5]
