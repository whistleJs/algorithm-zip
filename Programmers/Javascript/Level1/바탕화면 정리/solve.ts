const solution = (wallpaper: string[]) => {
  const result = [-1, -1, -1, -1];

  wallpaper.forEach((column, columnIndex) => {
    const startY = columnIndex;
    const endY = columnIndex + 1;

    column.split('').forEach((row, rowIndex) => {
      const startX = rowIndex;
      const endX = rowIndex + 1;

      if (row === '#') {
        if (result[1] === -1 || startX < result[1]) {
          result[1] = startX;
        }

        if (result[3] === -1 || endX > result[3]) {
          result[3] = endX;
        }

        if (result[0] === -1 || startY < result[0]) {
          result[0] = startY;
        }

        if (result[2] === -1 || endY > result[2]) {
          result[2] = endY;
        }
      }
    });
  });

  return result;
};

export default solution;
