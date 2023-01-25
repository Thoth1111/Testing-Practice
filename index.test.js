const stringLength = require('./index.js')

instanceof('Character Count', () => {
expect(stringLength('balloon').toBe({ b: 1, a: 1, l: 2, o: 2, n: 1 }))}) 