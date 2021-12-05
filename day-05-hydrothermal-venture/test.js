const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 5: Hydrothermal Venture', () => {
  it('should count overlapping points', () => {
    const input =
      `0,9 -> 5,9
       8,0 -> 0,8
       9,4 -> 3,4
       2,2 -> 2,1
       7,0 -> 7,4
       6,4 -> 2,0
       0,9 -> 2,9
       3,4 -> 1,4
       0,0 -> 8,8
       5,5 -> 8,2`;

    assert.strictEqual(part1(input), 5);
  });

  describe('Part Two', () => {
    it('should count overlapping points including diagonal lines', () => {
      const input =
        `0,9 -> 5,9
         8,0 -> 0,8
         9,4 -> 3,4
         2,2 -> 2,1
         7,0 -> 7,4
         6,4 -> 2,0
         0,9 -> 2,9
         3,4 -> 1,4
         0,0 -> 8,8
         5,5 -> 8,2`;

      assert.strictEqual(part2(input), 12);
    });
  });
});
