const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 1: Sonar Sweep', () => {
  it('should calculate how many measurements are larger than the previous', () => {
    const input =
      `199
       200
       208
       210
       200
       207
       240
       269
       260
       263`;

    assert.strictEqual(part1(input), 7);
  });

  describe('Part Two', () => {
    it('should calculate how many sums are larger than the previous', () => {
      const input =
        `199
         200
         208
         210
         200
         207
         240
         269
         260
         263`;

      assert.strictEqual(part2(input), 5);
    });
  });
});
