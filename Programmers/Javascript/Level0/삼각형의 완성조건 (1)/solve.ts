const solution = (sides: [number, number, number]) => {
  const [long, short1, short2] = sides.sort((a, b) => b - a);
  
  return long < short1 + short2 ? 1 : 2;
};

export default solution;