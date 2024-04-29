"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulationTravel = exports.exploration = void 0;
const planetsController_1 = require("../../objects/planets/planetsController");
const resourcesController_1 = require("../../objects/resources/resourcesController");
const propmtsServices_1 = require("../prompts/propmtsServices");
const resourcesServices_1 = require("../../objects/resources/resourcesServices");
const eventsControllers_1 = require("../events/eventsControllers");
function exploration(direction) {
    console.log(`Explorando hacia el ${direction}`);
}
exports.exploration = exploration;
function simulationTravel() {
    return __awaiter(this, void 0, void 0, function* () {
        const earth = new planetsController_1.Planets("Tierra", "", resourcesController_1.PlanetSource.water, eventsControllers_1.Difficulty.Hard);
        const marte = new planetsController_1.Planets("Marte", "", resourcesController_1.PlanetSource.ore, eventsControllers_1.Difficulty.Easy);
        const jupiter = new planetsController_1.Planets("Jupiter", "", resourcesController_1.PlanetSource.gas, eventsControllers_1.Difficulty.Medium);
        let direction;
        let planet;
        while (true) {
            console.log("\nElige el numero de opción (1-3):\n");
            console.log("1. Explorar");
            console.log("2. Recolectar recursos");
            console.log("3. Manejar evento aleatorio");
            const opcion = yield (0, propmtsServices_1.getInput)("> ");
            switch (opcion) {
                case "1":
                    direction = (yield (0, propmtsServices_1.getInput)("Ingresa la dirección (norte, sur, este, oeste): "));
                    exploration(direction);
                    break;
                case "2":
                    const planetStr = yield (0, propmtsServices_1.getInput)("Ingresa el numero del planeta (1.Tierra, 2.Marte, 3.Júpiter): ");
                    planet =
                        planetStr === "1" ? earth : planetStr === "2" ? marte : jupiter;
                    const recurso = yield (0, propmtsServices_1.getInput)(`Ingresa el recurso a recolectar (${resourcesController_1.PlanetSource[planet.resources]}): `);
                    (0, resourcesServices_1.gathering)(planet, recurso);
                    break;
                case "3":
                    const evento = new eventsControllers_1.Meteorites();
                    evento.showDescription();
                    break;
                default:
                    console.log("\nOpción inválida\n");
            }
        }
    });
}
exports.simulationTravel = simulationTravel;
//# sourceMappingURL=exploration.js.map