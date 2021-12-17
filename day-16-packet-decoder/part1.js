const VERSION_LENGTH = 3;
const TYPE_ID_LENGTH = 3;
const LITERAL_VALUE_LENGTH = 5;
const TOTAL_LENGTH_IN_BITS_LENGTH = 15;
const NUMBER_OF_SUBPACKETS_LENGTH = 11;

const LITERAL_VALUE_TYPE = 4;
const TOTAL_LENGTH_IN_BITS_TYPE = '0';

function print () {
  // console.log(...arguments);
}

const decodeLiteralValue = (bits) => {
  const segments = [];

  // eslint-disable-next-line
  for (let i = 0; i < bits.length; i += LITERAL_VALUE_LENGTH) {
    segments.push(bits.slice(i + 1, i + LITERAL_VALUE_LENGTH));
  }

  return parseInt(segments.join(''), 2);
};

const findLiteralValueLength = (bits) => {
  print('find literal value length:', bits);
  let length = 0;

  for (let i = 0; i < bits.length; i += LITERAL_VALUE_LENGTH) {
    length++;

    if (bits[i] === '0') {
      break;
    }
  }

  return length * LITERAL_VALUE_LENGTH;
};

const decodePacket = (bits) => {
  let sumOfVersions = 0;

  if (!bits.length) {
    return sumOfVersions;
  }

  print('decode sub packet:', bits);

  let index = 0;

  while (index < bits.length) {
    const version = parseInt(bits.slice(index, index + VERSION_LENGTH), 2);

    // if (!version) {
    //   return sumOfVersions;
    // }

    sumOfVersions += version;

    print('version:', version);

    index += VERSION_LENGTH;

    const typeId = parseInt(bits.slice(index, index + TYPE_ID_LENGTH), 2);

    index += TYPE_ID_LENGTH;

    if (typeId === LITERAL_VALUE_TYPE) {
      print('packet type: literal');
      const segment = bits.slice(index);
      const length = findLiteralValueLength(segment);
      const literalValue = decodeLiteralValue(bits.slice(index, index + length));

      print('literal value:', literalValue);
      index += length;
    } else {
      print('packet type: operator');
      const lengthTypeId = bits[index];

      index += 1;

      if (lengthTypeId === TOTAL_LENGTH_IN_BITS_TYPE) {
        const segment = bits.slice(index, index + TOTAL_LENGTH_IN_BITS_LENGTH);
        const numberOfBitsInSubPackets = parseInt(segment, 2);

        index += TOTAL_LENGTH_IN_BITS_LENGTH;

        print('number of bits in sub packet:', numberOfBitsInSubPackets);
        const subPackets = bits.slice(index, index + numberOfBitsInSubPackets);

        sumOfVersions += decodePacket(subPackets);

        index += numberOfBitsInSubPackets;
      } else {
        const segment = bits.slice(index, index + NUMBER_OF_SUBPACKETS_LENGTH);
        const numberOfSubPackets = parseInt(segment, 2);

        index += NUMBER_OF_SUBPACKETS_LENGTH;

        print('number of sub packets contained:', numberOfSubPackets);
        const subPackets = bits.slice(index);
        sumOfVersions += decodePacket(subPackets);

        break;
      }
    }
  }

  return sumOfVersions;
};

const messageToBinaryString = (hexString) => {
  return hexString
    .split('')
    .map((character) => parseInt(character, 16).toString(2).padStart(4, '0'))
    .join('');
};

module.exports = (input) => {
  const binaryString = messageToBinaryString(input);

  const result = decodePacket(binaryString);

  return result;
};
