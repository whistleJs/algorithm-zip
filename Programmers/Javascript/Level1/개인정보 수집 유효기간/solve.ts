const solution = (today: string, terms: string[], privacies: string[]): number[] => {
  const getDayCount = (date) => {
    const [year, month, day] = date.split('.').map(n => Number(n));
    
    return (year * 12 * 28) + (month * 28) + day;
  };
  
  const todayCount = getDayCount(today);
  
  const termInfo = terms.reduce((info, term) => {
    const [key, month] = term.split(' ');
    
    return {
      ...info,
      [key]: Number(month)
    }
  }, {});
  
  return privacies.map((privacy, i) => {
    const [date, term] = privacy.split(' ');
    
    return todayCount >= getDayCount(date) + (termInfo[term] * 28) ? i + 1 : null;
  }).filter(n => n);
};

export default solution;