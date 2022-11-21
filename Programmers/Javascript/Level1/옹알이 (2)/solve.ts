const solution = (babbling: string[]) => {
  let result = 0;
  
  babbling.forEach(word => {
    const difficultCount = ['ayaaya', 'yeye', 'woowoo', 'mama'].filter(s => word.includes(s)).length;
    
    if (difficultCount > 0) return;
    
    let findLength = 0;
    
    ['aya', 'ye', 'woo', 'ma'].forEach(s => findLength += word.length - word.replaceAll(s, '').length);
    
    if (findLength === word.length) result++;
  });
  
  return result;
};

export default solution;