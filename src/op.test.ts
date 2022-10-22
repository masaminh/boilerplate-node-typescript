import { add, sub } from './op';

describe('op', () => {
  it('add', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });

  it('sub', () => {
    const result = sub(1, 2);
    expect(result).toBe(-1);
  });
});
