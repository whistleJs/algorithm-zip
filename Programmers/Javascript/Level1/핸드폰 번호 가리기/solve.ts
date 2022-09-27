const solution = (str: string) => {
  return '*'.repeat(str.length - 4) + str.substr(str.length - 4, 4);
};

export default solution;