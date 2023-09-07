const solution = (spell: string[], dic: string[]) => {
  return dic.some(item => spell.filter(s => item.indexOf(s) > -1).length === spell.length) ? 1 : 2;
};

export default solution;