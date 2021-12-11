const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 11: Dumbo Octopus', () => {
  it('should calculate flashes after 100 steps', () => {
    const input =
      `5483143223
       2745854711
       5264556173
       6141336146
       6357385478
       4167524645
       2176841721
       6882881134
       4846848554
       5283751526`;

    assert.strictEqual(part1(input), 1656);
  });

  describe('Part Two', () => {
    it('should calculate the exact moment when all octopuses flash', () => {
      const input =
        `5483143223
         2745854711
         5264556173
         6141336146
         6357385478
         4167524645
         2176841721
         6882881134
         4846848554
         5283751526`;

      assert.strictEqual(part2(input), 195);
    });
  });
});
