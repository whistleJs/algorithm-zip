const solution = (str: string) => {
  const [row, col] = str.split(' ');
    
  return `${'*'.repeat(Number(row))}\n`.repeat(Number(col));
};

export default solution;