const solution = (arr: number[], commands: number[][]) => {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    result.push(
      arr.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[commands[i][2] - 1]
    );
  }

  return result;
};

export default solution;