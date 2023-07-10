const solution = (num_str: string) => {
  return [...num_str].reduce((total, s) => total + Number(s), 0);
};

export default solution;