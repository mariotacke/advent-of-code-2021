module.exports = (input) => {
  const coordinates = {};

  const lines = input.split('\n')
    .map((line) => line
      .trim()
      .split(' -> ')
      .map((point) => point
        .split(',')
        .map((component) => +component)));

  lines.forEach(([[x1, y1], [x2, y2]]) => {
    const length = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));

    const [start, end] = x1 < x2 ? [[x1, y1], [x2, y2]] : [[x2, y2], [x1, y1]];
    const dx = (end[0] - start[0]) / length;
    const dy = (end[1] - start[1]) / length;

    for (let i = 0; i <= length; i++) {
      const x = start[0] + i * dx;
      const y = start[1] + i * dy;
      const value = coordinates[`${x},${y}`] || 0;

      coordinates[`${x},${y}`] = value + 1;
    }
  });

  return Object.values(coordinates).reduce((count, value) => {
    return count + (value > 1 ? 1 : 0);
  }, 0);
};
