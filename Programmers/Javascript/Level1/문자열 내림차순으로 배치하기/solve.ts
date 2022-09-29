const solution = (str: string) => {
  return str.split('').sort((a, b) => a < b ? 1 : -1).join('');
};

export default solution;