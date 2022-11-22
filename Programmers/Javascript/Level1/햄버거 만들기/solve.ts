const solution = (ingredient: number[]) => {
  const stack = [];
  let result = 0;
  
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    
    if (stack.length > 3) {
      if (stack[stack.length - 4] === 1 && stack[stack.length - 3] === 2 && stack[stack.length - 2] === 3 && stack[stack.length - 1] === 1) {
        result++;
        stack.splice(stack.length - 4, 4);
      }
    }
  }
  
  return result;
};

export default solution;