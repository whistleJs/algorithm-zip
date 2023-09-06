const solution = (my_string: string, queries: [number, number][]) => {
  return queries.reduce((str, [s, e]) => {
    const newStr = [...str.slice(s, e + 1)].reverse().join('');
    return str.slice(0, s) + newStr + str.slice(e + 1);
  }, my_string);
};

export default solution;