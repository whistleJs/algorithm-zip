const solution = (myString: string) => {
  return myString.split('x').map(str => str.length);
};

export default solution;