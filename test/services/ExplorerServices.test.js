const ExplorerService = require("./../../lib/services/ExplorerServices");

describe("Test for ExplorerService", () => {
    test("1) Test: Filter by Mission", () => {
        const explorers = [{ mission: "node" }];
        const ExplorerByMission = ExplorerService.filterByMission(explorers, "node");
        expect(ExplorerByMission).toEqual(expect.arrayContaining([{ mission: "node" }]));
    });

    test("2) Test: Filter by Mission", () => {
        const explorers = [{ mission: "node" }];
        const ExplorerInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(ExplorerInNode).toBe(1);
    });

    test("3) Test: Get Username by Mission", () => {
        const explorers = [{ mission: "node", githubUsername: "Luis" }];
        const ExplorerUsername = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(ExplorerUsername[0]).toBe("Luis");
    });
});
