const solution = (file: string = "/dev/stdin") => {
  const input = require("fs")
    .readFileSync(file)
    .toString()
    .split("\n")
    .filter((s) => /[a-zA-Z]/gi.test(s));
  const strings: string[] = Array.from(new Set(input));

  return strings.sort((a, b) => {
    if (a.length === b.length) {
      return a > b ? 1 : -1;
    }

    return a.length - b.length;
  });
};

export default solution;
