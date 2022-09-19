// const { subtract, divide, multiply } = require('./Day-1/math');

const { sum, subtract, divide, multiply } = require('./math');

it('should sum 2+2 to be 4', () => {
  const result = sum(2, 2);
  expect(result).toBe(4);
});

it('should multiply 3 * # to be 4', () => {
  const result = multiply(3);
  expect(result).toBe(9);
});

it('should sum falsy', () => {
  // const result = sum(2, 2);
  expect(undefined).toBeFalsy();
});

test('Array', () => {
  let days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  expect(days).toContain('Tuesday');
  expect(days).not.toContain('Friday');
});
