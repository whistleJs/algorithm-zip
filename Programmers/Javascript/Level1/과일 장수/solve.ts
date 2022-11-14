const solution = (k: number, m: number, score: number[]) => {
  score.sort().reverse();
  
  return new Array(Math.ceil(score.length / m)).fill(0).reduce((sum, _, i) => {
    const box = score.slice(i * m, (i + 1) * m);
    const point = Math.min(...box);
    
    return (box.length === m ? box.length * point : 0) + sum;
  }, 0);
}

export default solution;