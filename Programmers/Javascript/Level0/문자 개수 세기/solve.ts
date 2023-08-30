const solution = (my_string: string) => {
  return [...my_string].reduce((arr, str) => {
    let code = str.charCodeAt();
    
    if (code > 96) code -= 6;
    code -= 65;
    arr[code]++;
    
    return arr;
  }, new Array(52).fill(0));
};

export default solution;