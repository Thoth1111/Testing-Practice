const stringLength = require('./task1')

it('Character Count', () => {
expect(stringLength("balloon")).toStrictEqual({ "a": 1, "b": 1, "l": 2, "n": 1, "o": 2 })
}) 