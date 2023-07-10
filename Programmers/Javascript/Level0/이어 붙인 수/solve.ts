const solution = (num_list: number[]) => {
  return Number([...num_list].filter(s => s % 2 === 0).join('')) + Number([...num_list].filter(s => s % 2 !== 0).join(''))
};

export default solution;