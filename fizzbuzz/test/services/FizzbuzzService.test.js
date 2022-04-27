const FizzbuzzService = require('./../../lib/services/FizzbuzzService')

describe('Test for FizzbuzzService', () => {
  test('1) Fizzbuss 1st case: trick = score', () => {
    const explorer = { name: "Explorer1", score: 1 }
    const service = FizzbuzzService.applyValidationInExplorer(explorer)
    expect(service.trick).toBe(service.score) // 1
  })

  test('2) Fizzbuss 2nd case: trick = fizz', () => {
    const explorer = { name: "Explorer3", score: 3 }
    const service = FizzbuzzService.applyValidationInExplorer(explorer)
    expect(service).toBe('FIZZ') // FIZZ
  })

  test('3) Fizzbuss 3rd case: trick = buzz', () => {
    const explorer = { name: "Explorer3", score: 5 }
    const service = FizzbuzzService.applyValidationInExplorer(explorer)
    expect(service).toBe('BUZZ') // FIZZ
  })
  
})
