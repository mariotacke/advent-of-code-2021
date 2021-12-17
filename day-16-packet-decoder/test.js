const assert = require('assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 16: Packet Decoder', () => {
  it('should decode "D2FE28" transmission', () => {
    assert.strictEqual(part1('D2FE28'), 6);
  });

  it('should decode "38006F45291200" transmission', () => {
    assert.strictEqual(part1('38006F45291200'), 9);
  });

  it('should decode "EE00D40C823060" transmission', () => {
    assert.strictEqual(part1('EE00D40C823060'), 14);
  });

  it('should decode "8A004A801A8002F478" transmission', () => {
    assert.strictEqual(part1('8A004A801A8002F478'), 16);
  });

  it('should decode "620080001611562C8802118E34" transmission', () => {
    assert.strictEqual(part1('620080001611562C8802118E34'), 12);
  });

  it('should decode "C0015000016115A2E0802F182340" transmission', () => {
    assert.strictEqual(part1('C0015000016115A2E0802F182340'), 23);
  });

  it('should decode "A0016C880162017C3686B18A3D4780" transmission', () => {
    assert.strictEqual(part1('A0016C880162017C3686B18A3D4780'), 31);
  });

  describe('Part Two', () => {
    it('should decode "C200B40A82" transmission', () => {
      assert.strictEqual(part2('C200B40A82'), 3);
    });

    it('should decode "04005AC33890" transmission', () => {
      assert.strictEqual(part2('04005AC33890'), 54);
    });

    it('should decode "880086C3E88112" transmission', () => {
      assert.strictEqual(part2('880086C3E88112'), 7);
    });

    it('should decode "CE00C43D881120" transmission', () => {
      assert.strictEqual(part2('CE00C43D881120'), 9);
    });

    it('should decode "D8005AC2A8F0" transmission', () => {
      assert.strictEqual(part2('D8005AC2A8F0'), 1);
    });

    it('should decode "F600BC2D8F" transmission', () => {
      assert.strictEqual(part2('F600BC2D8F'), 0);
    });

    it('should decode "9C005AC2F8F0" transmission', () => {
      assert.strictEqual(part2('9C005AC2F8F0'), 0);
    });

    it('should decode "9C0141080250320F1802104A08" transmission', () => {
      assert.strictEqual(part2('9C0141080250320F1802104A08'), 1);
    });
  });
});
