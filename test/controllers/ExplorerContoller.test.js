const ExplorerController = require("./../../lib/controllers/ExplorerContoller");
const FizzBuzz = require("./../../lib/services/FizzbuzzService")

describe("Test for ExplorerContoller", () => {
    test("1) Test: Get Explorer By Mission", () => {
        const ExplorersWithMission = ExplorerController.getExplorersByMission("node");
        expect(Array.isArray(ExplorersWithMission)).toBe(true);
    });

    test("2) Test: Get Explorers usernames by Mission", () => {
        const ExplorersUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        const match = ExplorersUsernames.some(el => {
            return el.includes("ajolonauta") ? true : false;
        });
        expect(match).toBe(true);
    });

    test("3) Test: Get Explorers amount", () => {
        const ExplorersLenght = ExplorerController.getExplorersAmonutByMission("node");      
        expect(ExplorersLenght).toBe(10);
    });

    test("4) Test: Fizzbuzz", () => {
      const explorer = {name: "explorer", score: 15}
      const fzExplorer = FizzBuzz.applyValidationInExplorer(explorer);
      expect(fzExplorer).toBe("FIZZBUZZ");
    });

    test("5) Test: Fizzbuzz with number", () => {
      const fzNumber = FizzBuzz.applyValidationInNumber(5);
      expect(fzNumber).toBe("BUZZ");
    });
});
