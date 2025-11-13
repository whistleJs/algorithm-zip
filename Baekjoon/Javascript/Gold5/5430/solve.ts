const solution = (file: string = "/dev/stdin") => {
  const input = require("fs").readFileSync(file).toString().split("\n");
  const T = Number(input[0]);
  const [, ...inputs] = input;

  const result = [];

  loop: for (let i = 0; i < T * 3; i += 3) {
    const commands = inputs[i].split("");
    const arr = JSON.parse(inputs[i + 2]);
    let start = 0,
      end = Number(inputs[i + 1]) - 1;
    let direction = "F";

    for (const command of commands) {
      if (command === "R") {
        direction = direction === "F" ? "B" : "F";
      } else if (command === "D") {
        if (start > end || end < 0) {
          result.push("error");
          continue loop;
        }

        if (direction === "F") {
          start++;
        } else if (direction === "B") {
          end--;
        }
      }
    }

    const temp = [];
    let index = direction === "F" ? start : end;

    while (true) {
      if (
        (direction === "F" && index > end) ||
        (direction === "B" && index < start)
      ) {
        result.push(temp);
        break;
      }

      temp.push(arr[index]);
      direction === "F" ? index++ : index--;
    }
  }

  return result;
};

export default solution;
