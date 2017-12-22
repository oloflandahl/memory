import { getValueBetween, isBetween, getMaxPercentageSize } from './mathHelpers';

describe('getValueBetween', () => {

  it('should return a value between the range', () => {
    expect(getValueBetween(5, 1, 9)).toEqual(5);
    expect(getValueBetween(5, 1, 5)).toEqual(5);
    expect(getValueBetween(5, 5, 9)).toEqual(5);
    expect(getValueBetween(5, 5, 5)).toEqual(5);
    expect(getValueBetween(5, -5, 9)).toEqual(5);
    expect(getValueBetween(5, 0, 4)).toEqual(4);
    expect(getValueBetween(5, 6, 9)).toEqual(6);
  });
  
});

describe('isBetween', () => {

  it('should return true when number is between range', () => {
    expect(isBetween(5, 1, 9)).toEqual(true);
    expect(isBetween(5, 1, 5)).toEqual(true);
    expect(isBetween(5, 5, 9)).toEqual(true);
    expect(isBetween(5, 5, 5)).toEqual(true);
    expect(isBetween(5, -5, 9)).toEqual(true);
  });

  it('should return false when number is outside range', () => {
    expect(isBetween(5, 0, 4)).toEqual(false);
    expect(isBetween(5, 6, 9)).toEqual(false);
  });
  
});

describe('getMaxPercentageSize', () => {

  it('should return the maximum percentage size for the specified number of cards', () => {
    expect(getMaxPercentageSize(4)).toEqual(50);
    expect(getMaxPercentageSize(9)).toBeGreaterThan(33);
    expect(getMaxPercentageSize(9)).toBeLessThan(34);
    expect(getMaxPercentageSize(16)).toEqual(25);
    expect(getMaxPercentageSize(25)).toEqual(20);
  });
  
});