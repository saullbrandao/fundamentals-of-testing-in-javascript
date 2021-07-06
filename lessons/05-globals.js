const { sumAsync, subtractAsync } = require('../math')

test('sumAsync add numbers asynchronously', async () => {
  const result = await sumAsync(3, 7)
  expect(result).toBe(10)
})

test('subtractAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(7, 3)
  expect(result).toBe(4)
})

