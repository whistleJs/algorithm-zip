const solution = (my_str: string, n: number) => {
  return new Array(Math.ceil(my_str.length / n)).fill('').map((_, i) => my_str.substring(i * n, (i + 1) * n));
};

export default solution;