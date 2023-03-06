const solution = (s: string, skip: string, index: number) => {
  const skipCodeList = skip.split('').map(char => char.charCodeAt(0));
  
  return s.split('').map(char => {
    let code = char.charCodeAt(0);
    let count = 0;
    
    while (count < index) {
      if (skipCodeList.includes(++code)) continue;
      if (code === 123) {
        code = 97;
        
        if (skipCodeList.includes(code)) continue;
      }
      count++;
    }
    
    return String.fromCharCode(code);
  }).join('');
}

export default solution;