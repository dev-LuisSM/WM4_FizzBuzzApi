const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

describe('Test for FizzbuzzService', () => {
  test('1) Fizzbuss 1st case: trick = score', () => {
    const explorer = { name: "Explorer1", score: 1 }
    const service = FizzbuzzService.applyValidationInExplorer(explorer)
    expect(service.trick).toBe(service.score) // 1
  })


})
