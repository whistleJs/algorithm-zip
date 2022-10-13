const solution = (X: string, Y: string) => {
  let result = '';
  
  for (let i = 0; i < 10; i++) {
    const findX = X.split(`${i}`).length - 1;
    const findY = Y.split(`${i}`).length - 1;
    
    result += i.toString().repeat(Math.min(findX, findY));
  }
  
  if (result.length === 0) {
    return '-1';
  } else if (result.split('0').length - 1 === result.length) {
    return '0';
  }
  
  return [...result].sort().reverse().join('');
}

export default solution;