const solution = (n: number, control: string) => {
  return [...control].reduce((total, str) => {
    switch (str) {
      case 'w':
        return total + 1;
      case 's':
        return total - 1;
      case 'd':
        return total + 10;
      case 'a':
        return total - 10;
    }
  }, n);
};

export default solution;