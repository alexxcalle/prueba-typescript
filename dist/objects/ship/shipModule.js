"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAtributes = void 0;
const shipControllers_1 = require("./shipControllers");
function getAtributes(ship) {
    return `${ship.name} tiene ${ship.hp} de vida y ${ship.fuel} de combustible. Es de color ${ship.color} y tiene una velocidad de ${ship.speed}`;
    getAtributes(shipControllers_1.Halo);
    getAtributes(shipControllers_1.Alien);
    getAtributes(shipControllers_1.Matrix);
}
exports.getAtributes = getAtributes;
