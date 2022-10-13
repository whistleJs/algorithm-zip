const solution = (dartResult: string) => {
  const result = [];
  let sum = 0;
  
  for (let i = 0; i < dartResult.length; i++) {
    let str = dartResult[i];
    
    if (!isNaN(+str)) {
      if (+str === 0 && !isNaN(+dartResult[i - 1])) {
        result[result.length - 1] = 10;
      } else {
        result.push(+str);
      }
    }
    
    const number = result[result.length - 1];
    
    switch (str) {
      case 'D':
        result[result.length - 1] = number * number;
        break;
      case 'T':
        result[result.length - 1] = number * number * number;
        break;
      case '#':
        result[result.length - 1] = -number;
        break;
    }
    
    if (str === '*') {
      result[result.length - 1] = number * 2;
      
      if (result.length > 1) {
        result[result.length - 2] = result[result.length - 2] * 2;
      }
    }
  }
  
  for (let i = 0 ; i < result.length ; i++) {
    sum += result[i];
  }
  
  return sum;
}

export default solution;