import { describe, expect, test } from 'vitest';
import calculateCalibration from './calculateCalibration.js';

describe('calculateCalibration', () => {
  test('parse sample example', () => {
    expect(
      calculateCalibration(`1abc2
        pqr3stu8vwx
        a1b2c3d4e5f
        treb7uchet`)
    ).toEqual(142);
  });
});
