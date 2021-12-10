const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 10: Syntax Scoring', () => {
  it('should calculate total syntax error score', () => {
    const input =
      `[({(<(())[]>[[{[]{<()<>>
       [(()[<>])]({[<{<<[]>>(
       {([(<{}[<>[]}>{[]{[(<()>
       (((({<>}<{<{<>}{[]{[]{}
       [[<[([]))<([[{}[[()]]]
       [{[{({}]{}}([{[{{{}}([]
       {<[[]]>}<{[{[{[]{()[[[]
       [<(<(<(<{}))><([]([]()
       <{([([[(<>()){}]>(<<{{
       <{([{{}}[<[[[<>{}]]]>[]]`;

    assert.strictEqual(part1(input), 26397);
  });

  describe('Part Two', () => {
    it('should repair incomplete lines and calculate middle score', () => {
      const input =
        `[({(<(())[]>[[{[]{<()<>>
         [(()[<>])]({[<{<<[]>>(
         {([(<{}[<>[]}>{[]{[(<()>
         (((({<>}<{<{<>}{[]{[]{}
         [[<[([]))<([[{}[[()]]]
         [{[{({}]{}}([{[{{{}}([]
         {<[[]]>}<{[{[{[]{()[[[]
         [<(<(<(<{}))><([]([]()
         <{([([[(<>()){}]>(<<{{
         <{([{{}}[<[[[<>{}]]]>[]]`;

      assert.strictEqual(part2(input), 288957);
    });
  });
});
