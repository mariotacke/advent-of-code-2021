module.exports = (input) => {
  const positions = input
    .split(',')
    .map((position) => +position)
    .sort((a, b) => a - b);

  let minimumFuelCost = Infinity;

  for (let i = positions[0]; i <= positions[positions.length - 1]; i++) {
    const fuelCost = positions.reduce((total, position) => {
      return total + Math.abs(i - position);
    }, 0);

    if (fuelCost < minimumFuelCost) {
      minimumFuelCost = fuelCost;
    }
  }

  return minimumFuelCost;
};
