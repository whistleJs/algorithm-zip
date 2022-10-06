const solution = (n: number) => {
  return Number.parseInt(n.toString(3).split('').reverse().join(''), 3);
}

export default solution;