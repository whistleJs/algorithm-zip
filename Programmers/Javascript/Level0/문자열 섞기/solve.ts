const solution = (str1: string, str2: string) => {
  return [...str1].reduce((result, str, i) => result + str + str2[i], '');
};

export default solution;