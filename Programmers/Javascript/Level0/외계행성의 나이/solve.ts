const solution = (age: number) => {
  return [...`${age}`].map(n => 'abcdefghij'[n]).join('');
};

export default solution;