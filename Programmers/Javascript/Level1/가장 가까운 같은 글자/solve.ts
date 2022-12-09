const solution = (s: string) => {
  return s.split('').map((str, index) => {
    const findIndex = s.slice(0, index).split('').reverse().findIndex(s2 => s2 === str);
    
    return findIndex < 0 ? findIndex : findIndex + 1;
  });
};

export default solution;