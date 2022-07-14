const solution = (numbers: number[], hand: 'left' | 'right') => {
  const position = {
      left: 9,
      right: 11
  };
  
  return numbers.reduce((result, num) => {
    num -= 1;
    
    if (num === -1) num = 10;
    
    if ([0, 3, 6].includes(num)) {
      position.left = num;
      return result + 'L';
    } else if ([2, 5, 8].includes(num)) {
      position.right = num;
      return result + 'R';
    }
    
    const leftPos = (Math.abs(Math.floor(num / 3) - Math.floor(position.left / 3))) + (Math.abs((num % 3) - (position.left % 3)));
    const rightPos = (Math.abs(Math.floor(num / 3) - Math.floor(position.right / 3))) + (Math.abs((num % 3) - (position.right % 3)));
    
    if (leftPos === rightPos) {
      position[hand] = num;
      return result + hand[0].toUpperCase();
    } else if (leftPos < rightPos) {
      position.left = num;
      return result + 'L';
    }

    position.right = num;
    return result + 'R';
  }, '');
}

export default solution;