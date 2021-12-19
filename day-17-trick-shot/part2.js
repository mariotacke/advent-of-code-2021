function* deltaX(velocity) {
  let vx = velocity;
  let dx = 0;

  while (true) {
    dx += vx;
    vx -= vx > 0 ? 1 : 0;

    yield [velocity, dx];
  }
}

function* deltaY(velocity) {
  let vy = velocity;
  let dy = 0;

  while (true) {
    dy += vy;
    vy--;

    yield [velocity, dy];
  }
}

module.exports = (input) => {
  const [minX, maxX, minY, maxY] = /x=(-?\d+)\.\.(-?\d+), y=(-?\d+)\.\.(-?\d+)/
    .exec(input).slice(1).map((value) => +value);

  const initialVelocities = new Set();
  const maxPositiveY = 200;

  let xVelocities = [...Array(maxX + 1).keys()].map((v) => deltaX(v));
  let yVelocities = [...Array(Math.abs(minY) + maxPositiveY + 1).keys()].map((v) => deltaY(v + minY));

  for (let step = 0; step <= 500; step++) {
    const dxs = xVelocities.map((generator) => generator.next().value);
    const dys = yVelocities.map((generator) => generator.next().value);
    const invalidXIndexes = new Set();
    const invalidYIndexes = new Set();

    for (let x = 0; x < dxs.length; x++) {
      const [vx, dx] = dxs[x];

      if (dx > maxX) {
        invalidXIndexes.add(x);
      }

      for (let y = 0; y < dys.length; y++) {
        const [vy, dy] = dys[y];

        if (dy < minY) {
          invalidYIndexes.add(y);
        }

        if (dx >= minX && dx <= maxX && dy >= minY && dy <= maxY) {
          initialVelocities.add(`${vx},${vy}`);
        }
      }
    }

    // prune invalid trajectories
    xVelocities = xVelocities.filter((_, i) => !invalidXIndexes.has(i));
    yVelocities = yVelocities.filter((_, i) => !invalidYIndexes.has(i));
  }

  return initialVelocities.size;
};
