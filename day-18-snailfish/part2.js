const check = (sum) => {
  while (/(\[\d+,\d+\])/.test(sum)) {
    sum = sum.replace(/(\[(\d+),(\d+)\])/, (_, __, p2, p3) => {
      return 3 * +p2 + 2 * +p3;
    });
  }

  return +sum;
};

const tenOrGreater = new RegExp(/(\d{2,})/);

const split = (number) => {
  const match = tenOrGreater.exec(number);
  const value = match[1];

  return [
    number.slice(0, match.index),
    `[${Math.floor(+value / 2)},${Math.ceil(+value / 2)}]`,
    number.slice(match.index + value.length),
  ].join('');
};

const explode = (number, startOfPairIndex) => {
  const left = (/.*(?:\[|,)(\d+)/.exec(number.slice(0, startOfPairIndex - 1)) || [])[1];
  const endOfPairIndex = startOfPairIndex + number.slice(startOfPairIndex).indexOf(']') + 1;
  const right = (/(\d+)/.exec(number.slice(endOfPairIndex)) || [])[1];
  const [a, b] = number.slice(startOfPairIndex, endOfPairIndex - 1).split(',').map((v) => +v);

  const exploded = [];

  const indexes = [
    0,
    left ? number.lastIndexOf(left, startOfPairIndex - 1) : startOfPairIndex - 1,
    left ? number.lastIndexOf(left, startOfPairIndex - 1) + left.length : startOfPairIndex - 1,
    startOfPairIndex - 1,
    endOfPairIndex,
    right ? number.indexOf(right, endOfPairIndex) : endOfPairIndex ,
    right ? number.indexOf(right, endOfPairIndex) + right.length : endOfPairIndex,
    number.length,
  ];

  const parts = indexes.slice(1).reduce((segments, index, i, array) => {
    const from = array[i - 1];
    const to = index;

    segments.push(number.slice(from, to));

    return segments;
  }, []);

  exploded.push(parts[0]);

  if (parts[1].length) {
    exploded.push(`${+parts[1] + a}`);
    exploded.push(parts[2]);
  }

  exploded.push('0');

  exploded.push(parts[4]);

  if (parts[5].length) {
    exploded.push(`${+parts[5] + b}`);
  }

  exploded.push(parts[6]);

  return exploded.join('');
};

const reduce = (number) => {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let index = 0;
    let depth = 0;

    while (index < number.length) {
      if (number[index] === '[') depth++;
      if (number[index] === ']') depth--;

      if (depth > 4) {
        break;
      }

      index++;
    }

    if (depth > 4) {
      number = explode(number, index + 1);
    } else if (tenOrGreater.test(number)) {
      number = split(number);
    } else {
      return number;
    }
  }
};

module.exports = (input) => {
  const numbers = input.split('\n').map((line) => line.trim());

  let largestMagnitude = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const otherNumbers = [...numbers.slice(0, i), ...numbers.slice(i + 1)];

    for (let j = 0; j < otherNumbers.length; j++) {
      const finalSum = reduce(`[${number},${otherNumbers[j]}]`);
      const magnitude = check(finalSum);

      if (magnitude > largestMagnitude) {
        largestMagnitude = magnitude;
      }
    }
  }

  return largestMagnitude;
};
