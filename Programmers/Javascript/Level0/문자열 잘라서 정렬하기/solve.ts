const solution = (myString: string) => {
  return myString.split('x').filter(s => s).sort();
};

export default solution;