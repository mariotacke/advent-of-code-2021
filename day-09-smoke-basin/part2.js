module.exports = (input) => {
  const heightMap = input
    .split('\n')
    .map((line) => line
      .trim()
      .split('')
      .map((point) => +point < 9));

  const width = heightMap[0].length;
  const height = heightMap.length;
  const basins = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!heightMap[y][x]) {
        continue;
      }

      const queue = [];

      let size = 0;

      queue.push([x, y]);

      while (queue.length) {
        const [x, y] = queue.pop();

        if (!heightMap[y][x]) {
          continue;
        }

        size++;
        heightMap[y][x] = false;

        x - 1 >= 0 && heightMap[y][x - 1] && queue.push([x - 1, y]);
        x + 1 < width && heightMap[y][x + 1] && queue.push([x + 1, y]);
        y - 1 >= 0 && heightMap[y - 1][x] && queue.push([x, y - 1]);
        y + 1 < height && heightMap[y + 1][x] && queue.push([x, y + 1]);
      }

      basins.push(size);
    }
  }

  return basins
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((total, basin) => total * basin, 1);
};
