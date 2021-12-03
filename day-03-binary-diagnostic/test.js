const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 3: Binary Diagnostic', () => {
  it('should compute power consumption of the submarine', () => {
    const input =
      `00100
       11110
       10110
       10111
       10101
       01111
       00111
       11100
       10000
       11001
       00010
       01010`;

    assert.strictEqual(part1(input), 198);
  });

  describe('Part Two', () => {
    it('should compute life support rating of the submarine', () => {
      const input =
        `00100
         11110
         10110
         10111
         10101
         01111
         00111
         11100
         10000
         11001
         00010
         01010`;

      assert.strictEqual(part2(input), 230);
    });
  });
});
