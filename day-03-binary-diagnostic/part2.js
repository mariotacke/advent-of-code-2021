module.exports = (input) => {
  const numbers = input.split('\n').map((line) => line.trim().split(''));
  const oxygenGeneratorRateBits = [];
  const co2ScrubberRateBits = [];

  let digit = 0;

  const mostCommonValue = (array, digit) => {
    const ones = array.reduce((ones, number) => ones + +number[digit], 0);

    return ones !== array.length / 2
      ? ones > Math.floor(array.length / 2) ? '1' : '0'
      : '1';
  };

  const leastCommonValue = (array, digit) => {
    const ones = array.reduce((ones, number) => ones + +number[digit], 0);

    return ones !== array.length / 2
      ? ones < array.length / 2 ? '1' : '0'
      : '0';
  };

  while (digit < numbers[0].length) {
    const oxygenGeneratorRateMask = oxygenGeneratorRateBits.join('');
    const co2ScrubberRateMask = co2ScrubberRateBits.join('');

    {
      const filteredNumbers = numbers.filter((element) => element.slice(0, digit).join('') === oxygenGeneratorRateMask);
      const number = filteredNumbers.length === 1
        ? filteredNumbers[0][digit]
        : mostCommonValue(filteredNumbers, digit);

      oxygenGeneratorRateBits.push(number);
    }
    {
      const filteredNumbers = numbers.filter((element) => element.slice(0, digit).join('') === co2ScrubberRateMask);
      const number = filteredNumbers.length === 1
        ? filteredNumbers[0][digit]
        : leastCommonValue(filteredNumbers, digit);

      co2ScrubberRateBits.push(number);
    }

    digit++;
  }

  const oxygenGeneratorRating = parseInt(oxygenGeneratorRateBits.join(''), 2);
  const co2ScrubberRating = parseInt(co2ScrubberRateBits.join(''), 2);
  const lifeSupportRating = oxygenGeneratorRating * co2ScrubberRating;

  return lifeSupportRating;
};
