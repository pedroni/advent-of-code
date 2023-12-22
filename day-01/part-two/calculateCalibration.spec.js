import { describe, expect, test } from 'vitest';
import calculateCalibration from './calculateCalibration.js';

describe('calculateCalibration', () => {
  test('parse sample example', () => {
    expect(
      calculateCalibration(`two1nine
      eightwothree
      abcone2threexyz
      xtwone3four
      4nineeightseven2
      zoneight234
      7pqrstsixteen`)
    ).toEqual(281);
  });

  // note that the last value is seven4seven we need to find the index of that twice to get the proper result which is 77 and not 74. 
  test('parse with two seven example', () => {
    expect(
      calculateCalibration(`two1nine
      eightwothree
      abcone2threexyz
      xtwone3four
      4nineeightseven2
      zoneight234
      seven4seven`)
    ).toEqual(282);
  });
});
