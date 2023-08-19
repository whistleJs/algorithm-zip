const solution = (my_string: string, indices: number[]) => {
  return [...my_string].filter((_, i) => !indices.includes(i)).join('');
};

export default solution;