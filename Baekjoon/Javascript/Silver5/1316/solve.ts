const solution = (file: string = "/dev/stdin") => {
  const input = require("fs").readFileSync(file).toString().split("\n");
  const N = Number(input[0]);
  const [, ...words] = input;

  let result = 0;

  for (let i = 0; i < N; i++) {
    const word = words[i];
    const temp = [];
    let prev = word[0];
    let success = true;

    for (let j = 1; j < word.length; j++) {
      if (word[j] !== prev) {
        if (temp.includes(word[j])) {
          success = false;
          break;
        }
        temp.push(prev);
        prev = word[j];
      }
    }

    if (success) result++;
  }

  return result;
};

export default solution;
