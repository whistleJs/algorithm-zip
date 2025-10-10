const solution = (file: string = "/dev/stdin") => {
  const input = require("fs")
    .readFileSync(file)
    .toString()
    .split("\n")
    .map((l) => l.split(" ").map(Number));
  const [[n], ...triangle] = input;
  const arr = [[triangle[0][0]]];

  for (let i = 1; i < n; i++) {
    const temp = [];

    for (let j = 0; j <= i; j++) {
      const num = triangle[i][j];

      if (j === 0) {
        temp.push(arr[i - 1][0] + num);
      } else if (j === i) {
        temp.push(arr[i - 1][i - 1] + num);
      } else {
        temp.push(Math.max(arr[i - 1][j - 1], arr[i - 1][j]) + num);
      }
    }

    arr.push(temp);
  }

  return Math.max(...arr[n - 1]);
};

export default solution;
