class ExplorerService{

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission; 
    }

    static getAmountOfExplorersByMission(explorers, mission){
        return this.filterByMission(explorers, mission).length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const getMission = explorers.filter((explorer) => explorer.mission === mission);
        const getUsers = getMission.map((explorer) => explorer.githubUsername);
        return getUsers;
    }
}

module.exports = ExplorerService;