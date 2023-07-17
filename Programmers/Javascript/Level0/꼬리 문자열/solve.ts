const solution = (str_list: string[], ex: string) => {
  return str_list.filter(str => !str.includes(ex)).join('');
};

export default solution;