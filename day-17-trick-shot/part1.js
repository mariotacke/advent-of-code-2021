const simulateY = (velocity, min, max) => {
  let dy = 0;
  let maxY = -Infinity;

  while (dy >= max) {
    dy += velocity;
    velocity--;

    if (dy > maxY) {
      maxY = dy;
    }

    if (velocity < 0 && dy >= min && dy < max) {
      return maxY;
    }
  }
};

const searchY = (min, max) => {
  let velocity = 1;
  let counter = 0;
  let maxY = -Infinity;

  while (counter++ < 1000) {
    const height = simulateY(velocity, min, max);

    if (height && height > maxY) {
      maxY = height;
    }

    velocity++;
  }

  return maxY;
};

module.exports = (input) => {
  const [minY, maxY] = /y=(-?\d+)\.\.(-?\d+)/
    .exec(input).slice(1).map((value) => +value);

  return searchY(minY, maxY);
};
