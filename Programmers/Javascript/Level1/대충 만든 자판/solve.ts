const solution = (keymap: string[], targets: string[]) => {
  const obj = {};
  
  keymap.forEach(key => {
    key.split('').forEach((char, i) => {
      if (!obj[char]) {
        obj[char] = i + 1;
      }
      
      obj[char] = Math.min(obj[char], i + 1);
    });
  });
  
  return targets.map(target => {
    return target.split('').reduce((count, char) => {
      if (count < 0 || !obj[char]) return -1;
      
      return count + obj[char];
    }, 0);
  });
}

export default solution;