const solution = (survey: string[], choices: number[]) => {
  const TYPE = ['RT', 'CF', 'JM', 'AN'];
  const arr = [0, 0, 0, 0];
  
  choices.forEach((choice, i) => {
    choice -= 4;
    let pointer = -1;
    
    switch (survey[i]) {
      case 'RT':
      case 'TR':
        pointer = 0;
        break;
      case 'CF':
      case 'FC':
        pointer = 1;
        break;
      case 'JM':
      case 'MJ':
        pointer = 2;
        break;
      case 'AN':
      case 'NA':
        pointer = 3;
        break;
    }
    
    arr[pointer] += choice * (TYPE.includes(survey[i]) ? 1 : -1);
  });
  
  return arr.map((item, i) => item <= 0 ? TYPE[i][0] : TYPE[i][1]).join('');
};

export default solution;