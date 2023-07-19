const solution = (cipher: string, code: number) => {
  return [...cipher].filter((_, i) => (i + 1) % code === 0).join('');
};

export default solution;