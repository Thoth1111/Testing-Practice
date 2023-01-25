const capitalize = require('./task4.js')

it('Capitalized', () => {
    expect(capitalize("banana")).toBe("Banana")
})

it('Capitalized', () => {
    expect(capitalize("Mango")).toBe("Mango")
})