module.exports = (input) => {
  const heightMap = input
    .split('\n')
    .map((line) => line.trim().split('').map((point) => +point));

  const width = heightMap[0].length;
  const height = heightMap.length;

  const isLowest = (x, y) => {
    const point = heightMap[y][x];

    return point < (x - 1 < 0 ? 9 : heightMap[y][x - 1]) &&
           point < (x + 1 >= width ? 9 : heightMap[y][x + 1]) &&
           point < (y - 1 < 0 ? 9 : heightMap[y - 1][x]) &&
           point < (y + 1 >= height ? 9 : heightMap[y + 1][x]);
  };

  let total = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (isLowest(x, y)) {
        total += heightMap[y][x] + 1;
      }
    }
  }

  return total;
};
