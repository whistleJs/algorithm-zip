const solution = (emergency: number[]) => {
  const sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map(i => sorted.findIndex(j => i === j) + 1);
};

export default solution;