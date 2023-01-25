const stringLength = require('./task1.js')

it('Character Count', () => {
expect(stringLength("balloon")).toStrictEqual({ "a": 1, "b": 1, "l": 2, "n": 1, "o": 2 })
}) 

it('Character Count', () => {
    expect(stringLength("label")).toStrictEqual({ "a": 1, "b": 1, "e": 1, "l": 2 })
})

it('Character Count', () => {
    expect(stringLength("rascal")).toStrictEqual({ "a": 2, "c": 1, "l": 1, "r": 1, "s": 1 })
}) 

