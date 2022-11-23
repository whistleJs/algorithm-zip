const solution = (number: number, limit: number, power: number) => {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    let count = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (j * j === i) {
        count++;
      } else if (i % j === 0) {
        count += 2;
      }
    }

    result += count > limit ? power : count;
  }

  return result;
};

export default solution;
