const solution = (my_string: string) => {
  return my_string.split(/[^\d]/).reduce((acc, str) => acc + Number(str), 0);
};

export default solution;