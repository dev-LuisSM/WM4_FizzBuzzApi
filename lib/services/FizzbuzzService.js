class FizzbussService {
  
    static applyValidationInExplorer(explorer){
        return (explorer.score % 5 === 0 && explorer.score % 3 === 0)
            ? explorer.trick = "FIZZBUZZ"
            : ( explorer.score % 3 === 0)
                ? explorer.trick = "FIZZ"
                : (explorer.score % 5 === 0)
                    ? explorer.trick = "BUZZ"
                    : explorer.trick = explorer.score;
    }

    static applyValidationInNumber(number) {
        return (number % 5 === 0 && number % 3 === 0)
            ? number = "FIZZBUZZ"
            : (number % 3 === 0)
                ? number = "FIZZ"
                : (number % 5 === 0)
                    ? number = "BUZZ"
                    : number;
    }

}

module.exports = FizzbussService;
