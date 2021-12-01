module.exports = (input) => {
  const measurements = input.split('\n').map((t) => +t);

  let previousMeasurementSum = measurements.slice(0, 3).reduce((a, b) => a + b, 0);
  let increasesCounter = 0;

  for (let i = 1; i < measurements.length; i++) {
    const measurementSum = measurements.slice(i, i + 3).reduce((a, b) => a + b, 0);

    if (measurementSum > previousMeasurementSum) {
      increasesCounter++;
    }

    previousMeasurementSum = measurementSum;
  }

  return increasesCounter;
};
