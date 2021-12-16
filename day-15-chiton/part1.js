module.exports = (input) => {
  const map = input
    .split('\n')
    .map((line) => line.trim().split('').map((p) => +p));

  let lowestTotalRisk = Array
    .from({ length: map.length })
    .reduce((total, _, i) => total + map[i][map.length - 1] + map[0][i], 0);

  const lowestPositionRisks = Array
    .from({ length: map.length })
    .map(() => Array
      .from({ length: map.length })
      .map(() => Infinity));

  const walk = (cost, [px, py]) => {
    if (cost >= lowestPositionRisks[py][px]) {
      return;
    }

    lowestPositionRisks[py][px] = cost;

    if (px === map.length - 1 && py === map.length - 1) {
      if (cost < lowestTotalRisk) {
        lowestTotalRisk = cost;
      }

      return;
    }

    const neighbors = [
      [px + 1, py], // right
      [px - 1, py], // left
      [px, py + 1], // down
      [px, py - 1], // up
    ];

    for (const [nx, ny] of neighbors) {
      // out of bounds
      if (nx < 0 || nx >= map.length || ny < 0 || ny >= map.length) {
        continue;
      }

      // cost too high
      if (cost + map[ny][nx] >= lowestTotalRisk) {
        continue;
      }

      walk(cost + map[ny][nx], [nx, ny]);
    }
  };

  walk(0, [0, 0]);

  return lowestTotalRisk;
};
