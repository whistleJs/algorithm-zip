const solution = (board: number[][], moves: number[]) => {
  const stack = [];
  let result = 0;
  
  for (let i = 0 ; i < moves.length ; i++) {
    let move = moves[i];
    
    for (let j = 0 ; j < board[0].length ; j++) {
      let item = board[j][move - 1];
      
      if (item > 0) {
        stack.push(item);
        board[j][move - 1] = 0;
        break;
      }
    }
  }
  
  for (let i = 0 ; i < stack.length - 1 ; i++) {
    if (stack[i] == stack[i + 1]) {
      stack.splice(i, 2);
      result += 2;
      i -= 2;
    }
  }
  
  return result;
}

export default solution;