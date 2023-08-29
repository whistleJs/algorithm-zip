const solution = (q: number, r: number, code: string) => {
  return [...code].filter((_, i) => i % q === r).join('');
};

export default solution;