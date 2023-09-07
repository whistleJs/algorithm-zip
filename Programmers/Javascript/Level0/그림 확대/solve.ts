const solution = (picture: string[], k: number) => {
  return picture.reduce((result, row) => result.concat(new Array(k).fill([...row].map(c => c.repeat(k)).join(''))), []);
};

export default solution;