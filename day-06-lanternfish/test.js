const assert = require('assert');

const part1 = require('./part1');

describe('Day 6: Lanternfish', () => {
  it('should count number of lanternfish after 80 days', () => {
    const input = '3,4,3,1,2';

    assert.strictEqual(part1(input), 5934);
  });
});
