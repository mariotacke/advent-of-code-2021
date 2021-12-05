module.exports = (input) => {
  const coordinates = {};

  const lines = input
    .split('\n')
    .map((line) => line
      .trim()
      .split(' -> ')
      .map((point) => point
        .split(',')
        .map((component) => +component)));

  lines.forEach(([[x1, y1], [x2, y2]]) => {
    if (x1 === x2) {
      const minY = Math.min(y1, y2);
      const maxY = Math.max(y1, y2);

      for (let y = minY; y < maxY + 1; y++) {
        const value = coordinates[`${x1},${y}`] || 0;

        coordinates[`${x1},${y}`] = value + 1;
      }
    } else if (y1 === y2) {
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);

      for (let x = minX; x < maxX + 1; x++) {
        const value = coordinates[`${x},${y1}`] || 0;

        coordinates[`${x},${y1}`] = value + 1;
      }
    }
  });

  return Object.values(coordinates).reduce((count, value) => {
    return count + (value > 1 ? 1 : 0);
  }, 0);
};
