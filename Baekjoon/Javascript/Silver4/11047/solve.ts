const solution = (file: string = "/dev/stdin") => {
  const input = require("fs").readFileSync(file).toString().split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let result = 0;

  for (let i = n; i > 0; i--) {
    const coin = Number(input[i]);
    const count = Math.floor(k / coin);

    if (count) {
      result += count;
      k %= coin;
    }
  }

  return result;
};

export default solution;
