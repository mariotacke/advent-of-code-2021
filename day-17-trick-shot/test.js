const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 17: Trick Shot', () => {
  it('should calculate highest Y position for trick shot', () => {
    assert.strictEqual(part1('target area: x=20..30, y=-10..-5'), 45);
  });

  describe('Part Two', () => {
    it('should calculate all possible velocities', () => {
      assert.strictEqual(part2('target area: x=20..30, y=-10..-5'), 112);
    });
  });
});
