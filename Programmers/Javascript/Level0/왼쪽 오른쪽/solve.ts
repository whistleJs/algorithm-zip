const solution = (str_list: string[]) => {
  const idx = str_list.findIndex(s => s === 'l' || s === 'r');
  
  if (idx === -1) return [];
  
  return str_list[idx] === 'l' ? str_list.slice(0, idx) : str_list.slice(idx + 1);
};

export default solution;