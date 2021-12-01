module.exports = (input) => {
  const measurements = input.split('\n').map((t) => +t);

  let previousMeasurement = measurements[0];
  let increasesCounter = 0;

  for (let i = 1; i < measurements.length; i++) {
    if (measurements[i] > previousMeasurement) {
      increasesCounter++;
    }

    previousMeasurement = measurements[i];
  }

  return increasesCounter;
};
