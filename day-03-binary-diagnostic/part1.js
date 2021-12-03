module.exports = (input) => {
  const numbers = input.split('\n').map((line) => line.trim().split(''));
  const gammaRateBits = [];
  const epsilonRateBits = [];
  const counters = Array.from({ length: numbers[0].length }).map(() => 0);

  for (let n = 0; n < numbers.length; n++) {
    const number = numbers[n];

    for (let digit = 0; digit < number.length; digit++) {
      counters[digit] += (number[digit] === '1' ? 1 : 0);
    }
  }

  for (let digit = 0; digit < counters.length; digit++) {
    gammaRateBits.push(counters[digit] > numbers.length / 2 ? '1' : '0');
    epsilonRateBits.push(counters[digit] < numbers.length / 2 ? '1' : '0');
  }

  const gammaRate = parseInt(gammaRateBits.join(''), 2);
  const epsilonRate = parseInt(epsilonRateBits.join(''), 2);
  const powerConsumption = gammaRate * epsilonRate;

  return powerConsumption;
};
