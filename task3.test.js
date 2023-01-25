const Calc = require('./task3.js')
const input = new Calc(10, 5);

describe ('Calculator', () => {
    test('addition', () => {
        expect(input.add(10, 5)).toBe(15)
    })
    test('subtraction', () => {
        expect(input.subtract(10, 5)).toBe(5)
    })
    test('division', () => {
        expect(input.divide(10, 5)).toBe(2)
    })
    test('multiplication', () => {
        expect(input.multiply(10, 5)).toBe(50)
    })
})