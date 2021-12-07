const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 7: The Treachery of Whales', () => {
  it('should calculate minimum amount of fuel to align', () => {
    const input = '16,1,2,0,4,2,7,1,2,14';

    assert.strictEqual(part1(input), 37);
  });

  describe('Part Two', () => {
    it('should calculate minimum amount of fuel to align again', () => {
      const input = '16,1,2,0,4,2,7,1,2,14';

      assert.strictEqual(part2(input), 168);
    });
  });
});
