const ExplorerService = require('./../../lib/services/ExplorerServices')

describe('Test for ExplorerService', () => {
  test('1) Test: Filter by Mission', () => {
    const explorers = [{ mission: "node" }]
    const ExplorerByMission = ExplorerService.filterByMission(explorers, "node")
    expect(ExplorerByMission.length).toBe(1)
  })

  
})
