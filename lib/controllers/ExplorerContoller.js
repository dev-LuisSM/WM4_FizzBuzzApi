const ExplorerService = require("./../services/ExplorerServices");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");
const explorers = Reader.readJsonFile("./../../explorer.json");

class ExplorerContoller{

    static getExplorersByMission(mission) {
        const byMission = ExplorerService.filterByMission(explorers, mission);
        return byMission;
    }

    static getExplorersUsernamesByMission(mission) {
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return usernames;
    }

    static getExplorersAmonutByMission(mission){
        const getLenght = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return getLenght;
    }
}

module.exports = ExplorerContoller;