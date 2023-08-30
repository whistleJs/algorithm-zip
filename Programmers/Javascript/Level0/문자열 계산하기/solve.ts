const solution = (my_string: string) => {
  let sep = 1;
  return my_string.split(' ').reduce((acc, str) => {
    if (str === '+') {
      sep = 1;
      return acc;
    } else if (str === '-') {
      sep = -1;
      return acc;
    }
    
    return acc + Number(str) * sep;
  }, 0);
};

export default solution;