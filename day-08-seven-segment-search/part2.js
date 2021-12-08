module.exports = (input) => {
  const entries = input.split('\n').map((line) => {
    const uniqueSignals = line.split('|')[0].trim().split(' ');
    const outputValue = line.split('|')[1].trim().split(' ').map((signal) => signal.split('').sort().join(''));

    return {
      uniqueSignals,
      outputValue,
    };
  });

  let sumOfOutputValues = 0;

  for (let i = 0; i < entries.length; i++) {
    const { uniqueSignals, outputValue } = entries[i];

    const hasLength = (value) => (signal) => signal.length === value;

    const one = uniqueSignals.find(hasLength(2)).split('');
    const four = uniqueSignals.find(hasLength(4)).split('');
    const seven = uniqueSignals.find(hasLength(3)).split('');
    const eight = uniqueSignals.find(hasLength(7)).split('');

    const twoOrThreeOrFive = uniqueSignals.filter(hasLength(5)).map((signal) => signal.split(''));
    const zeroOrSixOrNine = uniqueSignals.filter(hasLength(6)).map((signal) => signal.split(''));

    // deduce TOP LEFT OR MIDDLE from 1 and 4
    const topLeftOrMiddle = four.filter((signal) => !one.includes(signal));

    // deduce 3 from 2, 3, or 5 and 1
    const three = twoOrThreeOrFive.find((signal) => one.every((segment) => signal.includes(segment)));
    const twoOrFive = twoOrThreeOrFive.filter((signal) => signal !== three);

    // deduce TOP LEFT AND MIDDLE from TOP LEFT OR MIDDLE and 3
    const topLeft = topLeftOrMiddle.find((segment) => !three.includes(segment));
    const middle = topLeftOrMiddle.find((segment) => segment !== topLeft);

    // deduce 0 from 0, 6, or 9 and MIDDLE
    const zero = zeroOrSixOrNine.find((signal) => !signal.includes(middle));
    const sixOrNine = zeroOrSixOrNine.filter((signal) => signal !== zero);

    // deduce 6 and 9 from 1
    const nine = sixOrNine.find((signal) => one.every((segment) => signal.includes(segment)));
    const six = sixOrNine.find((signal) => signal !== nine);

    // deduce 2 and 5 from TOP LEFT
    const two = twoOrFive.find((signal) => !signal.includes(topLeft));
    const five = twoOrFive.find((signal) => signal !== two);

    const digits = new Map([
      [zero.sort().join(''),  '0'],
      [one.sort().join(''),   '1'],
      [two.sort().join(''),   '2'],
      [three.sort().join(''), '3'],
      [four.sort().join(''),  '4'],
      [five.sort().join(''),  '5'],
      [six.sort().join(''),   '6'],
      [seven.sort().join(''), '7'],
      [eight.sort().join(''), '8'],
      [nine.sort().join(''),  '9'],
    ]);

    const value = +outputValue.map((signal) => digits.get(signal)).join('');

    sumOfOutputValues += value;
  }

  return sumOfOutputValues;
};
