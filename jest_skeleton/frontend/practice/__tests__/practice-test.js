import { sum, screamify } from '../practice';

describe('sum', () => {
  test('adds two inputs', () => expect(sum(1, 2)).toEqual(3));
});

describe('screamify', () => {
  test('makes all letters uppercase', () => {
    expect(screamify('hi friend')).toEqual('HI FRIEND');
  });
});
