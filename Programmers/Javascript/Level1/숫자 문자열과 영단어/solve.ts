const solution = (s: string) => {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };
  
  const regex = new RegExp(Object.keys(numbers).join('|'), 'g');
  
  return Number(s.replace(regex, (n) => numbers[n]));
}

export default solution;