const solution = (angle: number) => {
  if (angle < 90) return 1;
  else if (angle === 90) return 2;
  else if (angle < 180) return 3;
  
  return 4;
};

export default solution;