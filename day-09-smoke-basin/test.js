const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 9: Smoke Basin', () => {
  it('should calculate total risk level', () => {
    const input =
      `2199943210
       3987894921
       9856789892
       8767896789
       9899965678`;

    assert.strictEqual(part1(input), 15);
  });

  describe('Part Two', () => {
    it('should multiply size of three largest basins', () => {
      const input =
        `2199943210
         3987894921
         9856789892
         8767896789
         9899965678`;

      assert.strictEqual(part2(input), 1134);
    });
  });
});
