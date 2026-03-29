import { describe, expect, it } from '@jest/globals';
import { noop } from '../utils';

describe('noop', () => {
  it('runs without throwing', () => {
    expect(() => noop()).not.toThrow();
  });
});
