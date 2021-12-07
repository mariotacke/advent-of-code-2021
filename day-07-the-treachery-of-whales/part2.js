module.exports = (input) => {
  const positions = input
    .split(',')
    .map((position) => +position)
    .sort((a, b) => a - b);

  const fuelCostCache = new Map();

  let minimumFuelCost = Infinity;

  const calculateFuelCost = (distance) => {
    let cost = fuelCostCache.get(distance);

    if (!cost) {
      cost = Array
        .from({ length: distance + 1 })
        .reduce((cost, _, i) => cost + i, 0);

      fuelCostCache.set(distance, cost);
    }

    return cost;
  };

  for (let i = positions[0]; i <= positions[positions.length - 1]; i++) {
    const fuelCost = positions.reduce((total, position) => {
      return total + calculateFuelCost(Math.abs(i - position));
    }, 0);

    if (fuelCost < minimumFuelCost) {
      minimumFuelCost = fuelCost;
    }
  }

  return minimumFuelCost;
};
