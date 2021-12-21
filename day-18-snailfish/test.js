const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 18: Snailfish', () => {
  it('should calculate magnitude #1', () => {
    const input = '[[1,2],[[3,4],5]]';

    assert.strictEqual(part1(input), 143);
  });

  it('should calculate magnitude #2', () => {
    const input = '[[[[0,7],4],[[7,8],[6,0]]],[8,1]]';

    assert.strictEqual(part1(input), 1384);
  });

  it('should calculate magnitude #3', () => {
    const input = '[[[[1,1],[2,2]],[3,3]],[4,4]]';

    assert.strictEqual(part1(input), 445);
  });

  it('should calculate magnitude #4', () => {
    const input = '[[[[3,0],[5,3]],[4,4]],[5,5]]';

    assert.strictEqual(part1(input), 791);
  });

  it('should calculate magnitude #5', () => {
    const input = '[[[[5,0],[7,4]],[5,5]],[6,6]]';

    assert.strictEqual(part1(input), 1137);
  });

  it('should calculate magnitude #6', () => {
    const input = '[[[[8,7],[7,7]],[[8,6],[7,7]]],[[[0,7],[6,6]],[8,7]]]';

    assert.strictEqual(part1(input), 3488);
  });

  it('should calculate magnitude of example #1', () => {
    const input =
      `[1,1]
       [2,2]
       [3,3]
       [4,4]`;

    // final sum: [[[[1,1],[2,2]],[3,3]],[4,4]]

    assert.strictEqual(part1(input), 445);
  });

  it('should calculate magnitude of example #2', () => {
    const input =
      `[1,1]
       [2,2]
       [3,3]
       [4,4]
       [5,5]`;

    // final sum: [[[[3,0],[5,3]],[4,4]],[5,5]]

    assert.strictEqual(part1(input), 791);
  });

  it('should calculate magnitude of example #3', () => {
    const input =
      `[1,1]
       [2,2]
       [3,3]
       [4,4]
       [5,5]
       [6,6]`;

    // final sum: [[[[5,0],[7,4]],[5,5]],[6,6]]

    assert.strictEqual(part1(input), 1137);
  });

  it('should calculate magnitude of example #4', () => {
    const input =
      `[[[0,[4,5]],[0,0]],[[[4,5],[2,6]],[9,5]]]
       [7,[[[3,7],[4,3]],[[6,3],[8,8]]]]
       [[2,[[0,8],[3,4]]],[[[6,7],1],[7,[1,6]]]]
       [[[[2,4],7],[6,[0,5]]],[[[6,8],[2,8]],[[2,1],[4,5]]]]
       [7,[5,[[3,8],[1,4]]]]
       [[2,[2,2]],[8,[8,1]]]
       [2,9]
       [1,[[[9,3],9],[[9,0],[0,7]]]]
       [[[5,[7,4]],7],1]
       [[[[4,2],2],6],[8,7]]`;

    // final sum: [[[[8,7],[7,7]],[[8,6],[7,7]]],[[[0,7],[6,6]],[8,7]]]

    assert.strictEqual(part1(input), 3488);
  });

  it('should calculate magnitude of homework assignment', () => {
    const input =
      `[[[0,[5,8]],[[1,7],[9,6]]],[[4,[1,2]],[[1,4],2]]]
       [[[5,[2,8]],4],[5,[[9,9],0]]]
       [6,[[[6,2],[5,6]],[[7,6],[4,7]]]]
       [[[6,[0,7]],[0,9]],[4,[9,[9,0]]]]
       [[[7,[6,4]],[3,[1,3]]],[[[5,5],1],9]]
       [[6,[[7,3],[3,2]]],[[[3,8],[5,7]],4]]
       [[[[5,4],[7,7]],8],[[8,3],8]]
       [[9,3],[[9,9],[6,[4,9]]]]
       [[2,[[7,7],7]],[[5,8],[[9,3],[0,2]]]]
       [[[[5,2],5],[8,[3,7]]],[[5,[7,5]],[4,4]]]`;

    // final sum: [[[[6,6],[7,6]],[[7,7],[7,0]]],[[[7,7],[7,7]],[[7,8],[9,9]]]]

    assert.strictEqual(part1(input), 4140);
  });

  describe('Part Two', () => {
    it('should calculate largest magnitude of homework assignment', () => {
      const input =
        `[[[0,[5,8]],[[1,7],[9,6]]],[[4,[1,2]],[[1,4],2]]]
         [[[5,[2,8]],4],[5,[[9,9],0]]]
         [6,[[[6,2],[5,6]],[[7,6],[4,7]]]]
         [[[6,[0,7]],[0,9]],[4,[9,[9,0]]]]
         [[[7,[6,4]],[3,[1,3]]],[[[5,5],1],9]]
         [[6,[[7,3],[3,2]]],[[[3,8],[5,7]],4]]
         [[[[5,4],[7,7]],8],[[8,3],8]]
         [[9,3],[[9,9],[6,[4,9]]]]
         [[2,[[7,7],7]],[[5,8],[[9,3],[0,2]]]]
         [[[[5,2],5],[8,[3,7]]],[[5,[7,5]],[4,4]]]`;

      // final sum: [[[[7,8],[6,6]],[[6,0],[7,7]]],[[[7,8],[8,8]],[[7,9],[0,6]]]]

      assert.strictEqual(part2(input), 3993);
    });
  });
});
