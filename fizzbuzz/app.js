// Será el reemplazo de app-legado.js
const Reader = require('./lib/utils/Reader')
const ExplorerService = require('./lib/services/ExplorerServices')
const FizzbuzzService = require('./lib/services/FizzbuzzService')

const explorers = Reader.readJsonFile("explorers.json")

ExplorerService.filterByMission(explorers, "node")
ExplorerService.getAmountOfExplorersByMission(explorers, "node")
ExplorerService.getExplorersUsernamesByMission(explorers, "node")

FizzbuzzService.applyValidationInExplorer(explorer1)
