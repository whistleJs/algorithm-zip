const solution = (sizes: number[][]) => {
  sizes = sizes.map(([w, h]) => w > h ? [w, h] : [h, w]);
  
  const w = Math.max(...sizes.map(([w, _]) => w));
  const h = Math.max(...sizes.map(([_, h]) => h));
  
  return w * h;
};

export default solution;