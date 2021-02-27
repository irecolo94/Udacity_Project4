const sum = require('../src/client/js/sum')

test('properly adds two numbers', ()=> {
  expect(sum(4, 4)).toBe(8)
})
