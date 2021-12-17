const VERSION_LENGTH = 3;
const TYPE_ID_LENGTH = 3;
const LITERAL_VALUE_LENGTH = 5;
const TOTAL_LENGTH_IN_BITS_LENGTH = 15;
const NUMBER_OF_SUBPACKETS_LENGTH = 11;

const decodeLiteralValue = (bits) => {
  const segments = [];

  for (let i = 0; i < bits.length; i += LITERAL_VALUE_LENGTH) {
    segments.push(bits.slice(i + 1, i + LITERAL_VALUE_LENGTH));
  }

  return parseInt(segments.join(''), 2);
};

const findLiteralValueLength = (bits) => {
  let length = 0;

  for (let i = 0; i < bits.length; i += LITERAL_VALUE_LENGTH) {
    length++;

    if (bits[i] === '0') {
      break;
    }
  }

  return length * LITERAL_VALUE_LENGTH;
};

// operator types
const SUM_TYPE = 0;
const PRODUCT_TYPE = 1;
const MINIMUM_TYPE = 2;
const MAXIMUM_TYPE = 3;
const LITERAL_VALUE_TYPE = 4;
const GREATER_THAN_TYPE = 5;
const LESS_THAN_TYPE = 6;
const EQUAL_TO_TYPE = 7;

const operators = new Map([
  [SUM_TYPE, (...rest) => rest.reduce((a, b) => a + b, 0)],
  [PRODUCT_TYPE, (...rest) => rest.reduce((a, b) => a * b, 1)],
  [MINIMUM_TYPE, (...rest) => Math.min(...rest)],
  [MAXIMUM_TYPE, (...rest) => Math.max(...rest)],
  [GREATER_THAN_TYPE, (a, b) => a > b ? 1 : 0],
  [LESS_THAN_TYPE, (a, b) => a < b ? 1 : 0],
  [EQUAL_TO_TYPE, (a, b) => a === b ? 1 : 0],
]);

const decodePackets = (bits, numberOfPackets = Infinity) => {
  let results = [];
  let index = 0;
  let packetNumber = 0;

  while (bits.slice(index).length > 3 && packetNumber < numberOfPackets) {
    index += VERSION_LENGTH;

    const typeId = parseInt(bits.slice(index, index + TYPE_ID_LENGTH), 2);

    index += TYPE_ID_LENGTH;

    if (typeId === LITERAL_VALUE_TYPE) {
      const length = findLiteralValueLength(bits.slice(index));
      const segment = bits.slice(index, index + length);
      const literalValue = decodeLiteralValue(segment);

      results.push(literalValue);
      index += length;
    } else {
      const operator = operators.get(typeId);
      const lengthTypeId = bits[index];

      index += 1;

      let subPackets = null;
      let numberOfSubPackets = Infinity;

      if (lengthTypeId === '0') {
        const segment = bits.slice(index, index + TOTAL_LENGTH_IN_BITS_LENGTH);
        const numberOfBitsInSubPackets = parseInt(segment, 2);

        index += TOTAL_LENGTH_IN_BITS_LENGTH;

        subPackets = bits.slice(index, index + numberOfBitsInSubPackets);
      } else {
        const segment = bits.slice(index, index + NUMBER_OF_SUBPACKETS_LENGTH);

        numberOfSubPackets = parseInt(segment, 2);
        index += NUMBER_OF_SUBPACKETS_LENGTH;

        subPackets = bits.slice(index);
      }

      const [result, offset] = decodePackets(subPackets, numberOfSubPackets);

      results.push(operator(...result));

      index += offset;
    }

    packetNumber++;
  }

  return [results, index];
};

const messageToBinaryString = (hexString) => {
  return hexString
    .split('')
    .map((character) => parseInt(character, 16).toString(2).padStart(4, '0'))
    .join('');
};

module.exports = (input) => {
  const binaryString = messageToBinaryString(input);
  const [results] = decodePackets(binaryString);

  return results[0];
};
