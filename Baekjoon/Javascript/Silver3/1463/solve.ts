const solution = (file: string = "/dev/stdin") => {
  const input = require("fs")
    .readFileSync(file)
    .toString()
    .split("\n")
    .map(Number);
  const [n] = input;
  const arr = [0, 0, 1, 1, 2];

  for (let i = 5; i <= n; i++) {
    arr[i] = arr[i - 1] + 1;

    if (i % 3 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 3] + 1);
    }

    if (i % 2 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    }
  }

  return arr[n];
};

export default solution;
