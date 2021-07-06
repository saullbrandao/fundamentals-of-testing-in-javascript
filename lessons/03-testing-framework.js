const { sum, subtract } = require('../math')

test('sum adds numbers', () => {
  const result = sum(3, 7)
  expect(result).toBe(10)
})

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3)
  expect(result).toBe(4)

})



function test(title, callback) {
  try {
    callback()
    console.log(`✅ ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
    console.log(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}