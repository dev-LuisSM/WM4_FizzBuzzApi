const ExplorerController = require("./../../lib/controllers/ExplorerContoller");

describe("Test for ExplorerContoller", () => {
    test("1) Test: Get Explorer By Mission", () => {
        const ExplorersWithMission = ExplorerController.getExplorersByMission("node");
        expect(Array.isArray(ExplorersWithMission)).toBe(true);
    });
});
