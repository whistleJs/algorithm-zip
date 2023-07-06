const solution = (my_string: string) => {
  return [...my_string.replaceAll(/[^\d]/g, '')].reduce((total, str) => total + Number(str), 0);
};

export default solution;
