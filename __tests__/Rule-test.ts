import Rule from '../src/Rule';

describe('Testing Rule...', () => {
  describe('Testing for empty value situation: ', () => {
    beforeEach(() => {
      process.env.EMPTY = '';
    });

    it('Empty value', () => {
      const rule = new Rule({
        key: 'EMPTY',
      });
      expect(rule.parse()).toBe('');
    });

    it('Empty value with default defined', () => {
      const rule = new Rule({
        key: 'EMPTY',
        default: 'NOT EMPTY',
      });
      expect(rule.parse()).toBe('');
    });

    it('Empty value with number cast', () => {
      const rule = new Rule({
        key: 'EMPTY',
        cast: Number,
      });
      expect(rule.parse()).toBe(0);
    });

    it('Empty value with bigint cast', () => {
      const rule = new Rule({
        key: 'EMPTY',
        cast: BigInt,
      });
      expect(rule.parse()).toBe(0n);
    });

    it('Empty value with boolean cast', () => {
      const rule = new Rule({
        key: 'EMPTY',
        cast: Boolean,
      });
      expect(rule.parse()).toBe(false);
    });
  });

  describe('Testing for number: ', () => {
    beforeEach(() => {
      process.env.NUMBER = '9999';
    });

    it('Number without cast', () => {
      const rule = new Rule({
        key: 'NUMBER',
      });
      expect(rule.parse()).toBe('9999');
    });

    it('Number with cast', () => {
      const rule = new Rule({
        key: 'NUMBER',
        cast: Number,
      });
      expect(rule.parse()).toBe(9999);
    });
  });

  describe('Testing for bigint: ', () => {
    beforeEach(() => {
      process.env.BIGINT = '9999n';
    });

    it('BigInt without cast', () => {
      const rule = new Rule({
        key: 'BIGINT',
      });
      expect(rule.parse()).toBe('9999n');
    });

    it('BigInt with cast', () => {
      const rule = new Rule({
        key: 'NUMBER',
        cast: BigInt,
      });
      expect(rule.parse()).toBe(9999n);
    });
  });
});
