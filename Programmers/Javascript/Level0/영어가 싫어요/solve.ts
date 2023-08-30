const obj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const solution = (numbers: string) => {
  return Number(numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, v => obj[v]));
};

export default solution;