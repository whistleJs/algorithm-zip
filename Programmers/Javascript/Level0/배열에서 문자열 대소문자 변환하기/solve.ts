const solution = (strArr: string[]) => {
  return strArr.map((str, i) => i % 2 === 0 ? str.toLowerCase() : str.toUpperCase());
};

export default solution;