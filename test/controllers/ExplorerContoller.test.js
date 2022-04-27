const ExplorerController = require("./../../lib/controllers/ExplorerContoller");

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
});
