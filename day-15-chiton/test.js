const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 15: Chiton', () => {
  it('should calculate lowest total risk for path', () => {
    const input =
      `1163751742
       1381373672
       2136511328
       3694931569
       7463417111
       1319128137
       1359912421
       3125421639
       1293138521
       2311944581`;

    assert.strictEqual(part1(input), 40);
  });

  describe('Part Two', () => {
    it('should calculate lowest total risk for path on full map', () => {
      const input =
        `1163751742
         1381373672
         2136511328
         3694931569
         7463417111
         1319128137
         1359912421
         3125421639
         1293138521
         2311944581`;

      assert.strictEqual(part2(input), 315);
    });
  });
});
