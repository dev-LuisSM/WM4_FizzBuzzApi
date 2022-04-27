const ExplorerService = require("./../services/ExplorerServices");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerContoller{

    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("./../../explorer.json");
        const byMission = ExplorerService.filterByMission(explorers, mission);
        return byMission;
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("./../../explorer.json");
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return usernames;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("./../../explorer.json");
        const getLenght = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return getLenght;
    }
}

module.exports = ExplorerContoller;