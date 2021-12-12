const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 12: Passage Pathing', () => {
  it('should calculate number of paths through cave system #1', () => {
    const input =
      `start-A
       start-b
       A-c
       A-b
       b-d
       A-end
       b-end`;

    assert.strictEqual(part1(input), 10);
  });

  it('should calculate number of paths through cave system #2', () => {
    const input =
      `dc-end
       HN-start
       start-kj
       dc-start
       dc-HN
       LN-dc
       HN-end
       kj-sa
       kj-HN
       kj-dc`;

    assert.strictEqual(part1(input), 19);
  });

  it('should calculate number of paths through cave system #3', () => {
    const input =
      `fs-end
       he-DX
       fs-he
       start-DX
       pj-DX
       end-zg
       zg-sl
       zg-pj
       pj-he
       RW-he
       fs-DX
       pj-RW
       zg-RW
       start-pj
       he-WI
       zg-he
       pj-fs
       start-RW`;

    assert.strictEqual(part1(input), 226);
  });

  describe('Part Two', () => {
    it('should calculate number of paths through cave system #1', () => {
      const input =
        `start-A
         start-b
         A-c
         A-b
         b-d
         A-end
         b-end`;

      assert.strictEqual(part2(input), 36);
    });

    it('should calculate number of paths through cave system #2', () => {
      const input =
        `dc-end
         HN-start
         start-kj
         dc-start
         dc-HN
         LN-dc
         HN-end
         kj-sa
         kj-HN
         kj-dc`;

      assert.strictEqual(part2(input), 103);
    });

    it('should calculate number of paths through cave system #3', () => {
      const input =
        `fs-end
         he-DX
         fs-he
         start-DX
         pj-DX
         end-zg
         zg-sl
         zg-pj
         pj-he
         RW-he
         fs-DX
         pj-RW
         zg-RW
         start-pj
         he-WI
         zg-he
         pj-fs
         start-RW`;

      assert.strictEqual(part2(input), 3509);
    });
  });
});
