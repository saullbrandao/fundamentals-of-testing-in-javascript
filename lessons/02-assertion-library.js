const { sum, subtract } = require('../math')

let result

result = sum(3, 7)
expect(result).toBe(10)

result = subtract(7, 3)
expect(result).toBe(4)

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}