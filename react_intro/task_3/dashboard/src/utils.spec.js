import { getCurrentYear } from './utils';
import { getFooterCopy } from './utils';


describe('getFooterCopy', () => {
  test('should return "Holberton School" when the argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('should return "Holberton School main dashboard" when the argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

describe('getCurrentYear', () => {
  test('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });
});
