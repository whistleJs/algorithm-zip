const solution = (numbers: number[], direction: string) => {
  return direction === 'left'
    ? [...numbers.slice(1, numbers.length), numbers[0]]
    : [numbers.pop(), ...numbers]
};

export default solution;