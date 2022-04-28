const ExplorerService = require("../services/ExplorerServices");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");
const explorersFile = "explorers.json";

class ExplorerController{

    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile(explorersFile);
        const byMission = ExplorerService.filterByMission(explorers, mission);
        return byMission;
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile(explorersFile);
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return usernames;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile(explorersFile);
        const getLenght = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return getLenght;
    }

    static FizzbuzzService(explorer) {
        const fizzbuzz = FizzbuzzService.applyValidationInExplorer(explorer);
        return fizzbuzz;
    }

    static FizzbuzzServiceNumber(number) {
      const fizzbuzzNumber = FizzbuzzService.applyValidationInNumber(number);
      return fizzbuzzNumber;
    }
}



module.exports = ExplorerController;