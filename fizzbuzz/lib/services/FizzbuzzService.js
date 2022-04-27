class FizzbussService {
  
  static applyValidationInExplorer(explorer){
    return (explorer.score % 5 === 0 && explorer.score % 3 === 0)
    ? explorer.trick = "FIZZBUZZ"
    : ( explorer.score % 3 === 0)
    ? explorer.trick = "FIZZ"
    : (explorer.score % 5 === 0)
    ? explorer.trick = "BUZZ"
    : explorer.trick = explorer.score
  }

}

module.exports = FizzbussService
