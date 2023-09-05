const solution = (ineq: string, eq: string, n: number, m: number) => {
  return +(
    ineq === '>' ? 
      eq === '=' ? n >= m : n > m
      : eq === '=' ? n <= m : n < m
  );
};

export default solution;