const solution = (date1: [number, number, number], date2: [number, number, number]) => {
  return +(new Date(date1) < new Date(date2));
};

export default solution;