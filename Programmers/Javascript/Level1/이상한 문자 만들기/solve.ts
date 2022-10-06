const solution = (str: string) => {
  return str.split(' ').map(data => data.split('').map((x, i) => i % 2 == 0 ? x.toUpperCase() : x.toLowerCase()).join('')).join(' ');
};

export default solution;