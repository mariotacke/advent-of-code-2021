const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 14: Extended Polymerization', () => {
  it('should count quantity of most and least common elements after 10 steps', () => {
    const input =
      `NNCB

      CH -> B
      HH -> N
      CB -> H
      NH -> C
      HB -> C
      HC -> B
      HN -> C
      NN -> C
      BH -> H
      NC -> B
      NB -> B
      BN -> B
      BB -> N
      BC -> B
      CC -> N
      CN -> C`;

    assert.strictEqual(part1(input), 1588);
  });

  describe('Part Two', () => {
    xit('should count quantity of most and least common elements after 40 steps', () => {
      const input =
      `NNCB

       CH -> B
       HH -> N
       CB -> H
       NH -> C
       HB -> C
       HC -> B
       HN -> C
       NN -> C
       BH -> H
       NC -> B
       NB -> B
       BN -> B
       BB -> N
       BC -> B
       CC -> N
       CN -> C`;

      assert.strictEqual(part2(input), 2188189693529);
    });
  });
});
