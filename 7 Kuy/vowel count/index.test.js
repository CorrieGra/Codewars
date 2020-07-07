const { getCount } = require('./index');

test('should return 5', () => {
    expect(getCount("abracadabra")).toBe(5);
});