const solution = (my_string: string, m: number, c: number) => {
  return [...my_string].filter((_, i) => i % m === c - 1).join('');
};

export default solution;