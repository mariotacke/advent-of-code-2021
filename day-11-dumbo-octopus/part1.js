module.exports = (input) => {
  let cells = input
    .split('\n')
    .map((line) => line.trim().split('').map((cell) => +cell))
    .flat();

  const length = Math.sqrt(cells.length);

  let step = 0;
  let totalFlashes = 0;

  while (step++ < 100) {
    const flashed = new Set();

    cells = cells.map((cell) => cell + 1);

    const flashIndexes = cells.reduce((indexes, cell, i) => {
      if (cell > 9) {
        indexes.push(i);
      }

      return indexes;
    }, []);

    while (flashIndexes.length) {
      const flashIndex = flashIndexes.pop();

      if (flashed.has(flashIndex)) {
        continue;
      }

      flashed.add(flashIndex);

      [
        [-1, -1],   [ 0, -1],   [ 1, -1],
        [-1,  0], /* current */ [ 1,  0],
        [-1,  1],   [ 0,  1],   [ 1,  1],
      ].forEach(([dx, dy]) => {
        const x = flashIndex % length + dx;
        const y = Math.floor(flashIndex / length) + dy;

        if (x >= 0 && x < length && y >= 0 && y < length) {
          const index = y * length + x;

          cells[index] += 1;

          if (cells[index] > 9) {
            flashIndexes.push(index);
          }
        }
      });
    }

    cells = cells.map((cell) => cell > 9 ? 0 : cell);

    totalFlashes += flashed.size;
  }

  return totalFlashes;
};
