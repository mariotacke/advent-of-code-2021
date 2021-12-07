const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 6: Lanternfish', () => {
  it('should count number of lanternfish after 80 days', () => {
    const input = '3,4,3,1,2';

    assert.strictEqual(part1(input), 5934);
  });

  describe('Part Two', () => {
    it('should count number of lanternfish after 256 days', () => {
      const input = '3,4,3,1,2';

      assert.strictEqual(part2(input), 26984457539);
    });
  });
});
