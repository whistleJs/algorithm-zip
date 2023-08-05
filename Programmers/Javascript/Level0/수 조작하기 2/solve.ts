const solution = (numLog: number[]) => {
  return numLog.reduce((result, num, i) => {
    switch (numLog[i + 1] - num) {
      case 1:
        return result + 'w';
      case -1:
        return result + 's';
      case 10:
        return result + 'd';
      case -10:
        return result + 'a';
      default:
        return result;
    }
  }, '');
};

export default solution;