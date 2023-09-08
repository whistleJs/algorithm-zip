const solution = (keyinput: string[], [maxX, maxY]: [number, number]) => {
  return keyinput.reduce(([x, y], key) => {
    switch (key) {
      case 'left':
        return [Math.max(--x, -((maxX - 1) / 2)), y];
      case 'right':
        return [Math.min(++x, (maxX - 1) / 2), y];
      case 'up':
        return [x, Math.min(++y, (maxY - 1) / 2)];
      case 'down':
        return [x, Math.max(--y, -((maxY - 1) / 2))];
    }
  }, [0, 0]);
};

export default solution;