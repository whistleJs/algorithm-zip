const solution = (array: number[], n: number) => {
  array.sort((a, b) => a - b);
  let number = array[0];
  
  for (const item of array) {
    if (Math.abs(item - n) < Math.abs(number - n)) {
      number = item;
    }
  }
  
  return number;
};

export default solution;