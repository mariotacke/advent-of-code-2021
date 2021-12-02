const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 2: Dive!', () => {
  it('should multiply final horizontal position and depth', () => {
    const input =
      `forward 5
       down 5
       forward 8
       up 3
       down 8
       forward 2`;

    assert.strictEqual(part1(input), 150);
  });

  describe('Part Two', () => {
    it('should multiply final horizontal position and depth considering aim', () => {
      const input =
        `forward 5
         down 5
         forward 8
         up 3
         down 8
         forward 2`;

      assert.strictEqual(part2(input), 900);
    });
  });
});
