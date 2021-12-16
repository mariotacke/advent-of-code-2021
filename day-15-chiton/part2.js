const generateMapFromInput = (input) => {
  const enlarge = (increase) => (value) => {
    if (value + increase < 10) {
      return value + increase;
    } else {
      return (value + increase) % 9;
    }
  };

  const map = input
    .split('\n')
    .map((line) => {
      const row = line.trim().split('').map((p) => +p);

      return [
        ...row,
        ...row.map(enlarge(1)),
        ...row.map(enlarge(2)),
        ...row.map(enlarge(3)),
        ...row.map(enlarge(4)),
      ];
    });

  const length = map.length;

  for (let i = 1; i < 5; i++) {
    for (let row = 0; row < length; row++) {
      map.push(map[row].map(enlarge(i)));
    }
  }

  return map;
};

module.exports = (input) => {
  const map = generateMapFromInput(input);

  let lowestTotalRisk = Math.min(
    Array.from({ length: map.length }).reduce((total, _, i) => total + map[0][i] + map[i][map.length - 1], 0),
    Array.from({ length: map.length }).reduce((total, _, i) => total + map[i][0] + map[map.length - 1][i], 0)
  );

  const distances = Array
    .from({ length: map.length })
    .map(() => Array
      .from({ length: map.length })
      .map(() => Infinity));

  const walk = (cost, [px, py]) => {
    if (cost >= distances[py][px]) {
      return;
    }

    if (px === map.length - 1 && py === map.length - 1) {
      if (cost < lowestTotalRisk) {
        lowestTotalRisk = cost;
      }
    }

    distances[py][px] = cost;

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
